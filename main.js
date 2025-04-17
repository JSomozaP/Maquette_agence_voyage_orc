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
    const nav = document.querySelector('.nav-menu');          // Sélectionne le menu de navigation
    const backdrop = document.createElement('div');           // Crée un fond obscur pour le menu
    backdrop.classList.add('menu-backdrop');                  // Ajoute une classe au fond obscur
    document.body.appendChild(backdrop);                      // Ajoute le fond obscur au body

    // 2. Gestion du clic sur le bouton burger
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');        // Active/désactive l'animation du bouton
        nav.classList.toggle('active');          // Affiche/cache le menu
        document.body.classList.toggle('menu-open'); // Ajoute/retire la classe pour le style du body
    });

    // 3. Gestion du clic sur le fond obscur (fermeture du menu)
    backdrop.addEventListener('click', () => {
        burger.classList.remove('active');        // Désactive l'animation du bouton
        nav.classList.remove('active');          // Cache le menu
        document.body.classList.remove('menu-open'); // Retire la classe du body
    });
}

// 4. Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();      // Initialise le mode sombre
    initBurgerMenu();    // Initialise le menu burger
});