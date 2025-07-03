// Attendre que le DOM soit complètement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', () => {
    // Récupération des éléments du DOM nécessaires
    // const counter = document.getElementById('counter');        // Élément d'affichage du compteur
    const button = document.getElementById('VoyageationButton');       // Bouton d'incrémentation
    // const resetButton = document.getElementById('resetButton'); // Bouton de reset
    
        // Ajout de la gestion du dark mode
        const darkModeToggle = document.getElementById('darkModeToggle');
    
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('darkmode');
            const darkMode = document.body.classList.contains('darkmode') ? 'enabled' : 'disabled';
            localStorage.setItem('darkMode', darkMode);
        });


    // Récupération du compteur sauvegardé ou initialisation à 0
    /*let count = parseInt(localStorage.getItem('orcCount')) || 0;
    counter.textContent = count;  */                            // Affichage initial du compteur

    // Gestion du clic sur le bouton principal
    /*button.addEventListener('click', () => {
        count++;                                              // Incrémentation
        counter.textContent = count;                          // Mise à jour de l'affichage
        localStorage.setItem('orcCount', count);              // Sauvegarde dans le localStorage
    });*/

    // Gestion du clic sur le bouton de réinitialisation
    /*resetButton.addEventListener('click', () => {
        count = 0;                                           // Remise à zéro
        counter.textContent = count;                         // Mise à jour de l'affichage
        localStorage.setItem('orcCount', count);             // Sauvegarde du nouveau compteur
    });*/

    // Vérification et application du mode sombre
    const darkMode = localStorage.getItem('darkMode');       // Récupération de la préférence
    if (darkMode === 'enabled') {                           // Si le mode sombre est activé
        document.body.classList.add('darkmode');            // Application du mode sombre
    }
});

    // Gestion du toast
    // 1. Configuration initiale des éléments
// Récupération des références aux éléments DOM nécessaires
const voyageationButton = document.getElementById('VoyageationButton');  // Bouton principal
const toastOverlay = document.getElementById('toast-overlay');          // Conteneur des toasts

// 2. Fonction pour afficher un toast central
function showToast(message, duration = 3000) {
    // Création d'un nouvel élément div pour le toast
    const toast = document.createElement('div');
    toast.className = 'toast';              // Ajout de la classe CSS
    toast.textContent = message;            // Définition du message
    
    // Ajout du toast dans le conteneur overlay
    toastOverlay.appendChild(toast);
    
    // Animation d'apparition avec un léger délai pour permettre la transition
    setTimeout(() => {
        toast.classList.add('show');        // Déclenchement de l'animation
    }, 10);

    // Suppression automatique du toast
    setTimeout(() => {
        toast.classList.remove('show');     // Animation de disparition
        setTimeout(() => {
            toastOverlay.removeChild(toast); // Suppression du DOM
        }, 300);                            // Délai pour la transition de sortie
    }, duration);
}

// 3. Fonction pour générer une position aléatoire
function getRandomPosition() {
    return {
        // Calcule une position X aléatoire en tenant compte de la largeur du toast
        x: Math.random() * (window.innerWidth - 200),  
        // Calcule une position Y aléatoire en tenant compte de la hauteur du toast
        y: Math.random() * (window.innerHeight - 100)  
    };
}

// 4. Fonction pour générer une rotation aléatoire
function getRandomRotation() {
    return Math.random() * 360;  // Retourne un angle entre 0 et 360 degrés
}

// 5. Fonction pour afficher un toast avec position et rotation aléatoires
function showRandomToast(message, duration = 2000) {
    // Création du toast aléatoire
    const toast = document.createElement('div');
    toast.className = 'toast random-toast';
    toast.textContent = message;
    
    // Application de la position et rotation aléatoires
    const position = getRandomPosition();
    toast.style.position = 'fixed';
    toast.style.left = `${position.x}px`;
    toast.style.top = `${position.y}px`;
    toast.style.transform = `rotate(${getRandomRotation()}deg)`;
    
    // Ajout au body (pour permettre un positionnement absolu)
    document.body.appendChild(toast);
    
    // Animation d'apparition
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // Suppression automatique
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, duration);
}

// 6. Liste des messages aléatoires possibles
const messages = [
    "Voyageation intense ! 🚀",
    "Toi partir loin ! ✈️",
    "Bonheur maximal ! 🌈",
    "Destination: Paradis ! 🌴",
    "Wow! Super voyage ! 🎉",
    "Aventure commence ! 🗺️"
];

// 7. Gestionnaire d'événement pour le clic sur le bouton
voyageationButton.addEventListener('click', () => {
    // Affichage du toast central
    showToast('Maintenant toi heureux en dedans de toi-même !');
    
    // Sélection et affichage d'un message aléatoire
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showRandomToast(randomMessage);
});
