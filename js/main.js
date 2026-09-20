/**
 * CS-Créatives Cameroun — script principal.
 * Aucune dépendance externe : JS natif uniquement, pour rester léger
 * sur les connexions lentes visées par ce site.
 */
(function () {
  'use strict';

  /* ==========================================================
     1. MENU MOBILE
     ========================================================== */
  var boutonMenu = document.getElementById('bouton-menu');
  var navPrincipale = document.getElementById('nav-principale');

  if (boutonMenu && navPrincipale) {
    boutonMenu.addEventListener('click', function () {
      var estOuvert = navPrincipale.classList.toggle('est-ouvert');
      boutonMenu.setAttribute('aria-expanded', String(estOuvert));
    });

    // Ferme le menu quand on choisit un lien (navigation par ancre)
    navPrincipale.querySelectorAll('a').forEach(function (lien) {
      lien.addEventListener('click', function () {
        navPrincipale.classList.remove('est-ouvert');
        boutonMenu.setAttribute('aria-expanded', 'false');
      });
    });

    // Ferme le menu avec la touche Échap (accessibilité clavier)
    document.addEventListener('keydown', function (evenement) {
      if (evenement.key === 'Escape' && navPrincipale.classList.contains('est-ouvert')) {
        navPrincipale.classList.remove('est-ouvert');
        boutonMenu.setAttribute('aria-expanded', 'false');
        boutonMenu.focus();
      }
    });
  }

  /* ==========================================================
     2. EN-TÊTE : légère ombre au scroll (repère visuel, pas d'animation lourde)
     ========================================================== */
  var enTete = document.getElementById('en-tete');
  if (enTete) {
    var appliquerOmbre = function () {
      enTete.classList.toggle('en-tete--scroll', window.scrollY > 4);
    };
    appliquerOmbre();
    window.addEventListener('scroll', appliquerOmbre, { passive: true });
  }

  /* ==========================================================
     3. ANNÉE COURANTE DANS LE PIED DE PAGE
     ========================================================== */
  var elementAnnee = document.getElementById('annee-courante');
  if (elementAnnee) {
    elementAnnee.textContent = String(new Date().getFullYear());
  }

  /* ==========================================================
     4. FORMULAIRE DE CONTACT
     Validation côté client + envoi vers Formspree en JavaScript
     (évite un rechargement de page et permet un message de
     confirmation clair, dans le même vocabulaire que les CTA).
     ========================================================== */
  var formulaire = document.getElementById('formulaire-contact');

  if (formulaire) {
    var champNom = document.getElementById('nom');
    var champTelephone = document.getElementById('telephone');
    var champBesoin = document.getElementById('besoin');
    var statut = document.getElementById('formulaire-statut');

    var regles = [
      {
        champ: champNom,
        erreurId: 'erreur-nom',
        valider: function (valeur) { return valeur.trim().length >= 2; },
        message: 'Merci d\'indiquer votre nom (2 caractères minimum).'
      },
      {
        champ: champTelephone,
        erreurId: 'erreur-telephone',
        // Tolérant : chiffres, espaces, +, tirets — adapté aux numéros camerounais et WhatsApp
        valider: function (valeur) { return /^[+\d][\d\s-]{7,}$/.test(valeur.trim()); },
        message: 'Merci d\'indiquer un numéro de téléphone ou WhatsApp valide.'
      },
      {
        champ: champBesoin,
        erreurId: 'erreur-besoin',
        valider: function (valeur) { return valeur.trim().length >= 10; },
        message: 'Merci de décrire votre besoin en quelques mots (10 caractères minimum).'
      }
    ];

    function afficherErreur(regle, message) {
      var elementErreur = document.getElementById(regle.erreurId);
      if (elementErreur) { elementErreur.textContent = message; }
      regle.champ.setAttribute('aria-invalid', message ? 'true' : 'false');
    }

    function validerFormulaire() {
      var estValide = true;
      regles.forEach(function (regle) {
        if (!regle.valider(regle.champ.value)) {
          afficherErreur(regle, regle.message);
          estValide = false;
        } else {
          afficherErreur(regle, '');
        }
      });
      return estValide;
    }

    // Validation en direct dès que l'utilisateur quitte un champ
    regles.forEach(function (regle) {
      regle.champ.addEventListener('blur', function () {
        afficherErreur(regle, regle.valider(regle.champ.value) ? '' : regle.message);
      });
    });

    formulaire.addEventListener('submit', function (evenement) {
      evenement.preventDefault();

      if (!validerFormulaire()) {
        statut.textContent = 'Merci de corriger les champs signalés ci-dessus.';
        statut.dataset.etat = 'erreur';
        // Place le focus sur le premier champ invalide (accessibilité)
        var premierInvalide = regles.find(function (regle) {
          return regle.champ.getAttribute('aria-invalid') === 'true';
        });
        if (premierInvalide) { premierInvalide.champ.focus(); }
        return;
      }

      var boutonEnvoi = formulaire.querySelector('button[type="submit"]');
      boutonEnvoi.disabled = true;
      statut.textContent = 'Envoi de votre demande de devis en cours…';
      statut.dataset.etat = '';

      fetch(formulaire.action, {
        method: 'POST',
        body: new FormData(formulaire),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (reponse) {
          if (reponse.ok) {
            statut.textContent = 'Votre demande de devis a été reçue. Nous revenons vers vous rapidement.';
            statut.dataset.etat = 'succes';
            formulaire.reset();
          } else {
            throw new Error('Réponse du serveur invalide');
          }
        })
        .catch(function () {
          statut.textContent = 'L\'envoi a échoué. Merci de réessayer ou de nous écrire directement sur WhatsApp.';
          statut.dataset.etat = 'erreur';
        })
        .finally(function () {
          boutonEnvoi.disabled = false;
        });
    });
  }
})();
