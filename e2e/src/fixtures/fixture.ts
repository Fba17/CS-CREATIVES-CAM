import AxeBuilder from '@axe-core/playwright';
import { APIRequestContext, test as base, TestInfo } from '@playwright/test';
import { CURRENT_BACKEND } from 'environment';
import { StartPage } from 'src/pages/startpage.page';

const JIRA_BASE = 'https://jira.webapp.sdst.sbaintern.de/browse/';
const linkJiraItems = async (testInfo: TestInfo, stories: string[]) => {
  stories.forEach((story) => {
    const jiraLink = `${JIRA_BASE}${story}`;
    testInfo.annotations.push({ type: 'Jira Item', description: jiraLink });
  });
};

const beschreibungHinzufuegen = async (testInfo: TestInfo, description: string) => {
  testInfo.annotations.push({ type: 'Beschreibung', description: description });
};

const tamaraNamenHinzufuegen = async (testInfo: TestInfo, namen: string[]) => {
  namen.forEach((name) => {
    testInfo.annotations.push({ type: 'Tamara Testname', description: name });
  });
};

type CustomAxeBuilder = {
  analyzeAndLog: () => Promise<Awaited<ReturnType<AxeBuilder['analyze']>>>;
};

export type JiraFixture = {
  linkJiraItems: (stories: string[]) => void;
  beschreibungHinzufuegen: (description: string) => void;
  tamaraNamenHinzufuegen: (namen: string[]) => void;
  makeAxeBuilder: () => CustomAxeBuilder;
  api: APIRequestContext;
};

export const test = base.extend<JiraFixture>({
  page: async ({ page }, use, testInfo) => {
    // Remove snapshot suffix (OS name etc)
    testInfo.snapshotSuffix = '';

    await page.setDefaultTimeout(60_000);
    await page.setDefaultNavigationTimeout(60_000);

    // Open the start page
    await page.goto('', { waitUntil: 'domcontentloaded', timeout: 60_000 });

    // Wait for and remove the cookie disclaimer
    await new StartPage(page).cookieBanner.acceptAll();

    await use(page);
  },
  beschreibungHinzufuegen: async ({}, use, testInfo) => {
    const fn = (description: string) => beschreibungHinzufuegen(testInfo, description);
    await use(fn);
  },
  linkJiraItems: async ({}, use, testInfo) => {
    const fn = (stories: string[]) => linkJiraItems(testInfo, stories);
    await use(fn);
  },
  tamaraNamenHinzufuegen: async ({}, use, testInfo) => {
    const fn = (namen: string[]) => tamaraNamenHinzufuegen(testInfo, namen);
    await use(fn);
  },
  makeAxeBuilder: async ({ page }, use, testInfo) => {
    const factory = () => ({
      async analyzeAndLog() {
        // Create the Axe Builder
        const builder = new AxeBuilder({ page })
          .disableRules(['aria-required-children'])
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])
          .include('html')
          .exclude('ba-bub-geois-map');

        // Run accessibility analysis
        const accessibilityScanResults = await builder.analyze();

        // Log found accessibility findings
        for (const v of accessibilityScanResults.violations) {
          console.log(`Accessibility: ${v.id} - ${v.description}`);
          v.nodes.forEach((node) => console.log(` -> ${node.target.join(' ')}`));
        }

        // Attach Scan results to test infos
        await testInfo.attach('accessibility-scan-results', {
          body: JSON.stringify(accessibilityScanResults, null, 2),
          contentType: 'application/json',
        });

        return accessibilityScanResults;
      },
    });

    await use(factory);
  },
  api: async ({ playwright }, use) => {
    const apiContext = await playwright.request.newContext({
      baseURL: CURRENT_BACKEND,
      ignoreHTTPSErrors: true,
      extraHTTPHeaders: { 'X-Api-Key': 'infosysbub-berufetv' },
    });
    await use(apiContext);
    await apiContext.dispose();
  },
});

export const expect = base.expect;
