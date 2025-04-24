// Définition de la fonction principale qui initialise le dark mode
function initDarkMode() {
    // 1. Vérification du localStorage
    // localStorage permet de stocker des données dans le navigateur
    // getItem('darkMode') récupère la valeur associée à la clé 'darkMode'
    const darkMode = localStorage.getItem('darkMode');
    
    // 2. Création du bouton
    // createElement crée un nouvel élément HTML
    const darkModeToggle = document.createElement('button');
    // Ajout de l'emoji lune/soleil comme contenu du bouton
    darkModeToggle.innerHTML = '🌓';
    // Ajout de la classe CSS 'dark-mode-toggle' pour le style
    darkModeToggle.classList.add('dark-mode-toggle');
    // Ajout du bouton à la fin du body
    document.body.appendChild(darkModeToggle);
    
    // 3. Vérification de l'état initial
    // Si le mode sombre était activé lors de la dernière visite
    if (darkMode === 'enabled') {
        // Ajoute la classe 'darkmode' au body pour activer les styles sombres
        document.body.classList.add('darkmode');
    }
    
    // 4. Gestion des clics sur le bouton
    darkModeToggle.addEventListener('click', () => {
        // toggle inverse l'état : ajoute la classe si absente, la retire si présente
        document.body.classList.toggle('darkmode');
        
        // 5. Sauvegarde de la préférence
        if (document.body.classList.contains('darkmode')) {
            // Si le mode sombre est activé, on sauvegarde 'enabled'
            localStorage.setItem('darkMode', 'enabled');
        } else {
            // Si le mode sombre est désactivé, on efface la préférence
            localStorage.setItem('darkMode', null);
        }
    });
}

// 6. Déclenchement de l'initialisation
// Attend que le DOM soit complètement chargé avant d'exécuter initDarkMode
// Cela évite les erreurs si le JavaScript s'exécute avant que la page soit prête
document.addEventListener('DOMContentLoaded', initDarkMode);

// Nouvelle fonction pour le menu burger
function initBurgerMenu() {
    // 1. Sélection et création des éléments
    const burger = document.querySelector('.burger-menu');     // Sélectionne le bouton burger
    const closeBtn = document.querySelector('.close-menu');       // Sélectionne le bouton de fermeture
    const nav = document.querySelector('.nav-menu');          // Sélectionne le menu de navigation
    const backdrop = document.createElement('div');           // Crée un fond obscur pour le menu
    backdrop.classList.add('menu-backdrop');                  // Ajoute une classe au fond obscur
    document.body.appendChild(backdrop);                      // Ajoute le fond obscur au body

    // 2. Gestion du clic sur le bouton burger et ouvertur du menu
    burger.addEventListener('click', () => {
       // burger.classList.toggle('active');        // Active/désactive l'animation du bouton
        nav.classList.add('active');          // Affiche/cache le menu
        document.body.classList.add('menu-open');
        burger.classList.add('hidden');       // Ajoute la classe pour cacher le bouton // Ajoute/retire la classe pour le style du body
    });

    //3. Fermeture du menu avec le bouton x
    closeBtn.addEventListener('click', () => {
        nav.classList.remove('active');
        document.body.classList.remove('menu-open');
        burger.classList.remove('hidden');    // Réaffiche le bouton burger
    });

    // 4. Gestion du clic sur le fond obscur (fermeture du menu)
    backdrop.addEventListener('click', () => {
        nav.classList.remove('active');          // Cache le menu
        document.body.classList.remove('menu-open'); // Retire la classe du body
        burger.classList.remove('hidden');        // Désactive l'animation du bouton
    });
}

// 4. Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();      // Initialise le mode sombre
    initBurgerMenu();    // Initialise le menu burger
});


//Formulaire de contact
// Fonction principale qui initialise et gère le formulaire de contact
function initContactForm() {
    // Récupère l'élément modal (la fenêtre popup) par son ID
    const modal = document.getElementById('contactModal');
    
    // Recherche le lien "Parlez à nous içi" parmi tous les liens qui pointent vers trompage.html
    // querySelectorAll trouve tous les liens, Array.from les convertit en tableau
    // find cherche le premier élément qui contient exactement le texte voulu
    const contactBtn = Array.from(document.querySelectorAll('a[href="trompage.html"]'))
        .find(link => link.textContent.trim() === 'Parlez à nous içi');
    
    // Récupère le bouton de fermeture (×) dans le modal
    const closeBtn = modal.querySelector('.close-modal');
    
    // Récupère le formulaire lui-même
    const form = document.getElementById('contactForm');

    // Si le bouton de contact existe
    if (contactBtn) {
        // Ajoute un écouteur d'événement pour le clic sur le bouton
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();  // Empêche le lien de rediriger vers trompage.html
            modal.classList.add('active');  // Affiche le modal en ajoutant la classe active
        });
    }

    // Gestion de la fermeture du modal via le bouton ×
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');  // Cache le modal en retirant la classe active
    });

    // Gestion de la soumission du formulaire
    form.addEventListener('submit', (e) => {
        e.preventDefault();  // Empêche l'envoi traditionnel du formulaire
        let isValid = true;  // Variable qui vérifie si tout le formulaire est valide

        // VALIDATION DU PRÉNOM
        const prenom = document.getElementById('prenom');  // Récupère le champ prénom
        // Vérifie si la longueur du prénom est invalide (moins de 2 ou plus de 20 caractères)
        if (prenom.value.length < 2 || prenom.value.length > 20) {
            showError(prenom, 'Le prénom doit contenir entre 2 et 20 caractères');
            isValid = false;  // Marque le formulaire comme invalide
        } else {
            clearError(prenom);  // Efface le message d'erreur si le prénom est valide
        }

        // VALIDATION DU NOM (même logique que le prénom)
        const nom = document.getElementById('nom');
        if (nom.value.length < 2 || nom.value.length > 20) {
            showError(nom, 'Le nom doit contenir entre 2 et 20 caractères');
            isValid = false;
        } else {
            clearError(nom);
        }

        // VALIDATION DE L'EMAIL
        const email = document.getElementById('email');
        // Expression régulière qui vérifie le format de l'email
        // Vérifie qu'il y a : du texte @ du texte . du texte
       // Expression régulière (RegEx) pour valider le format d'un email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Décomposition de la RegEx :
        // ^ : début de la chaîne
        // [^\s@]+ : un ou plusieurs caractères qui ne sont ni un espace ni @
        // @ : le symbole @ obligatoire
        // [^\s@]+ : un ou plusieurs caractères qui ne sont ni un espace ni @
        // \. : un point (échappé avec \)
        // [^\s@]+ : un ou plusieurs caractères qui ne sont ni un espace ni @
        // $ : fin de la chaîne

        // Test si la valeur de l'email ne correspond PAS au format attendu
        if (!emailRegex.test(email.value)) {
            // Si l'email est invalide :
            // Affiche le message d'erreur sous le champ
            showError(email, 'Veuillez entrer une adresse email valide');
            // Marque le formulaire comme invalide
            isValid = false;
        } else {
            // Si l'email est valide :
            // Efface le message d'erreur
            clearError(email);
        }

        // VALIDATION DU MESSAGE
        const message = document.getElementById('message');
        // Vérifie la longueur du message (entre 2 et 500 caractères)
        if (message.value.length < 2 || message.value.length > 500) {
            showError(message, 'Le message doit contenir entre 2 et 500 caractères');
            isValid = false;
        } else {
            clearError(message);
        }

        // Si tout est valide
        if (isValid) {
            modal.classList.remove('active');  // Ferme le modal
            form.reset();  // Réinitialise le formulaire
        }
    });
}

// Fonction qui affiche un message d'erreur sous un champ
function showError(element, message) {
    // Récupère l'élément qui suit le champ (span.error-message)
    const errorElement = element.nextElementSibling;
    errorElement.textContent = message;  // Affiche le message d'erreur
}

// Fonction qui efface le message d'erreur sous un champ
function clearError(element) {
    const errorElement = element.nextElementSibling;
    errorElement.textContent = '';  // Efface le message d'erreur
}

// Lance l'initialisation du formulaire quand la page est entièrement chargée
document.addEventListener('DOMContentLoaded', initContactForm);