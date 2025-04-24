// Attendre que le DOM soit complètement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', () => {
    // Récupération des éléments du DOM nécessaires
    const counter = document.getElementById('counter');        // Élément d'affichage du compteur
    const button = document.getElementById('orcButton');       // Bouton d'incrémentation
    const resetButton = document.getElementById('resetButton'); // Bouton de reset
    
        // Ajout de la gestion du dark mode
        const darkModeToggle = document.getElementById('darkModeToggle');
    
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('darkmode');
            const darkMode = document.body.classList.contains('darkmode') ? 'enabled' : 'disabled';
            localStorage.setItem('darkMode', darkMode);
        });


    // Récupération du compteur sauvegardé ou initialisation à 0
    let count = parseInt(localStorage.getItem('orcCount')) || 0;
    counter.textContent = count;                              // Affichage initial du compteur

    // Gestion du clic sur le bouton principal
    button.addEventListener('click', () => {
        count++;                                              // Incrémentation
        counter.textContent = count;                          // Mise à jour de l'affichage
        localStorage.setItem('orcCount', count);              // Sauvegarde dans le localStorage
    });

    // Gestion du clic sur le bouton de réinitialisation
    resetButton.addEventListener('click', () => {
        count = 0;                                           // Remise à zéro
        counter.textContent = count;                         // Mise à jour de l'affichage
        localStorage.setItem('orcCount', count);             // Sauvegarde du nouveau compteur
    });

    // Vérification et application du mode sombre
    const darkMode = localStorage.getItem('darkMode');       // Récupération de la préférence
    if (darkMode === 'enabled') {                           // Si le mode sombre est activé
        document.body.classList.add('darkmode');            // Application du mode sombre
    }
});