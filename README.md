# CS-Créatives Cameroun — Landing page

Site vitrine one-page pour CS-Créatives Cameroun SARL (imprimerie grand format, Mvog-Ada, Yaoundé).
HTML/CSS/JS natifs — aucun outil de build, aucune dépendance à installer.

## 1. Structure du projet

```
index.html                  → toute la page (une seule page, navigation par ancres)
css/style.css                → styles (variables de marque en haut de fichier)
js/main.js                   → menu mobile, header au scroll, validation + envoi du formulaire
assets/logo/                 → logo réel (PNG/WebP transparents) + favicon
assets/images/placeholders/  → visuels à remplacer par de vraies photos
robots.txt, sitemap.xml      → SEO technique
```

## 2. Installation / prévisualisation locale

Aucune installation nécessaire. Deux options :

- Ouvrir `index.html` directement dans un navigateur.
- Ou, pour un rendu plus proche de la production (recommandé) :
  ```bash
  npx serve .
  # ou : python3 -m http.server 8080
  ```

## 3. Mise en ligne (hébergement)

Le site est 100 % statique : il fonctionne sur n'importe quel hébergement mutualisé,
Netlify, Vercel ou GitHub Pages. Il suffit de déposer l'ensemble des fichiers à la racine
du domaine (ou du dossier public de l'hébergeur).

Avant la mise en ligne, remplacer toutes les valeurs marquées `[À COMPLÉTER]` ou
`.a-completer` par les informations réelles : voir la section 5 ci-dessous.

## 4. Ajouter une réalisation à la galerie

Chaque réalisation est un bloc HTML autonome dans `index.html`, section `#realisations`.
Pour en ajouter une, **dupliquer un bloc existant** et modifier son contenu — aucune
autre modification n'est nécessaire, la mise en page s'adapte automatiquement.

```html
<article class="carte-realisation repere-cadre">
  <img src="assets/images/mon-projet.webp"
       alt="Description précise et vérifiable du visuel"
       width="800" height="600" loading="lazy">
  <div class="carte-realisation__contenu">
    <p class="carte-realisation__secteur">Nom du client ou secteur, ville</p>
    <p><strong>Besoin&nbsp;:</strong> le problème du client, en une phrase.</p>
    <p><strong>Résultat&nbsp;:</strong> ce qui a été livré et l'effet obtenu.</p>
  </div>
</article>
```

Coller ce bloc avant la balise `<div class="relance">` de la section Réalisations.
La galerie s'organise automatiquement en 1 colonne (mobile) à 3 colonnes (desktop).

## 5. Contenus encore à fournir

Recherchez `a-completer` ou `[À COMPLÉTER]` dans `index.html` : chaque occurrence signale
une information réelle manquante (jamais inventée). État actuel :

**Déjà intégré (v2)**
- Logo réel (`assets/logo/cs-creatives-logo.png` / `.webp`, fond transparent).
- Téléphone : +237 693 895 684 — email : cscreativesc@gmail.com — adresse : Chapelle Mvog-Ada, Yaoundé.
- Mentions légales : RCCM CM-NSI-02-2025-B12-00229 — NIU M032517638542R.
- Palette de marque (extraite du dégradé du logo, voir section 6).

**⚠️ À vérifier avant mise en ligne**
- **Numéro WhatsApp** : le numéro fourni (+237 93 89 56 84) a **un chiffre de moins** que le
  téléphone (+237 693 895 684). Un `<!-- TODO -->` marque les deux endroits concernés
  (bouton flottant + section Contact) — à confirmer avant publication, sinon le lien WhatsApp
  n'aboutira pas à la bonne discussion.

**Encore manquant**
- **Horaires** d'ouverture (section Contact + données structurées).
- **Réseaux sociaux** : liens Facebook / Instagram / LinkedIn (pied de page).
- **Services** : délais indicatifs pour chaque prestation (section Services).
- **Atelier & équipement** : noms des machines et ce qu'elles permettent (section Locaux).
- **Réalisations** : les 3 exemples actuels sont des gabarits à remplacer par de vrais projets.
- **Formulaire** : remplacer `VOTRE_ID_FORMSPREE` dans l'attribut `action` du formulaire par
  l'identifiant obtenu sur [formspree.io](https://formspree.io) (compte gratuit jusqu'à 50 envois/mois).
- **Photos** : tous les fichiers dans `assets/images/placeholders/` sont des gabarits
  (fond hachuré + légende). Les remplacer par de vraies photos de l'atelier et des réalisations,
  idéalement en **WebP** avec fallback JPEG :
  ```html
  <picture>
    <source srcset="assets/images/atelier-1.webp" type="image/webp">
    <img src="assets/images/atelier-1.jpg" alt="…" width="800" height="600" loading="lazy">
  </picture>
  ```
- **URL du site** : remplacer `https://www.cs-creatives.cm/` (balises canonical, Open Graph,
  sitemap.xml, robots.txt) par le nom de domaine réel une fois choisi.

## 6. Charte graphique appliquée

Palette **extraite du logo réel fourni** (dégradé rouge-orangé → jaune) par échantillonnage
des pixels du fichier, puis ajustée pour le contraste — voir `css/style.css` (bloc `:root`) :

| Rôle | Couleur | Origine |
|---|---|---|
| Primaire (quasi-noir chaud) | `#201A17` | neutre biaisé vers l'orange de la marque |
| Secondaire (braise foncée) | `#2E1F19` | idem, pour les sections alternées |
| Accent décoratif | `#FA6414` | moyenne du dégradé du logo |
| Accent texte/bouton | `#DE2200` | stop foncé du dégradé du logo, assombri pour l'AA |
| Fond (papier chaud) | `#F8F4EF` | neutre clair, même famille |

Typographies : **Sora** (titres) / **Inter** (texte), via Google Fonts.

`#FA6414` (orange décoratif brut) sert aux repères de calage et au texte sur fond sombre
(4,8–5,7:1, conforme AA) : en texte sur fond clair ou en fond de bouton avec texte blanc, son
contraste tombe à 3,0:1 (sous le seuil AA de 4,5:1). `#DE2200` — le stop le plus foncé du
dégradé du logo, légèrement assombri — atteint 4,84:1 sur blanc et sert de variante texte/bouton
conforme. Voir les variables `--couleur-accent-texte` / `--couleur-accent-bouton` dans
`css/style.css`. Si la charte évolue, revérifier le contraste avec
[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) avant de remplacer
ces variables.

L'élément signature du site est le **repère de calage** (⌐, motif emprunté aux repères
d'alignement utilisés en impression grand format) : il encadre le visuel du hero, les cartes
services, les réalisations et les photos d'atelier. C'est la classe CSS `.repere-cadre`.

## 7. Checklist finale avant mise en ligne

**Performance**
- [ ] Remplacer les SVG placeholders par de vraies photos compressées (WebP, poids < 150 Ko/image)
- [ ] Vérifier le poids total de la page (`console Réseau` du navigateur) : viser < 1 Mo au premier chargement
- [ ] Tester en simulation 3G lente (outils de dév. du navigateur) : premier affichage utile < 3 s

**Accessibilité**
- [ ] Vérifier les contrastes texte/fond (couleur accent sur fond blanc = AA, à recontrôler si la palette change)
- [ ] Navigation complète au clavier (Tab / Entrée / Échap) sur menu et formulaire
- [ ] Lecteur d'écran : vérifier que les images ont un texte alternatif pertinent (pas seulement les placeholders)

**SEO**
- [ ] Renseigner les horaires réels dans les données structurées `LocalBusiness` (adresse et téléphone déjà à jour)
- [ ] Vérifier l'aperçu de partage WhatsApp/Facebook (balises Open Graph) avec l'outil du réseau concerné
- [ ] Soumettre le site à Google Search Console une fois le domaine réel en ligne

**Mobile**
- [ ] Tester sur un Android d'entrée de gamme réel (pas seulement le simulateur du navigateur)
- [ ] Vérifier que le bouton WhatsApp flottant n'empêche jamais de lire un texte ou d'atteindre un bouton
- [ ] Vérifier le clic direct sur les numéros de téléphone (`tel:`) et WhatsApp (`wa.me`) depuis un vrai mobile

## 8. Formulaire de contact — service utilisé

**Formspree** a été choisi (voir échange de validation) : pas de backend à héberger,
gratuit jusqu'à 50 soumissions/mois, mise en place en quelques minutes sur
[formspree.io](https://formspree.io). Le script `js/main.js` gère la validation et l'envoi
en JavaScript (pas de rechargement de page) ; il fonctionne aussi en secours via l'attribut
`action` du formulaire si JavaScript est désactivé.
