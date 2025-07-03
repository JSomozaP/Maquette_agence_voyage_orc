# 🛫 VOYAGEATION - Site Web Humoristique de Voyage

![Voyageation Banner](Z%20Page%20principale.png)

## 📝 Description

**Voyageation** est un site web humoristique et interactif de voyage développé en HTML, CSS et JavaScript vanilla. Ce projet propose une expérience utilisateur moderne avec un design responsive, un dark mode persistant, et de nombreuses animations interactives.

Le site présente de façon parodique une agence de voyage fantastique proposant des destinations imaginaires issues de l'univers de World of Warcraft, avec un ton décalé et des fonctionnalités ludiques.

## ✨ Fonctionnalités Principales

### 🌓 Dark Mode Intelligent
- Basculement instantané entre thème clair et sombre
- Synchronisation automatique entre toutes les pages
- Persistance via localStorage
- Bouton toggle animé avec transitions fluides

### 📱 Design Responsive
- Menu burger adaptatif pour mobile/tablette
- Interface optimisée pour tous les écrans
- Animations et transitions CSS3

### 🎮 Éléments Interactifs
- **Compteur Orcosaure** : Compteur persistant avec bouton de reset
- **Toast Notifications** : Messages popup avec positions et rotations aléatoires
- **Formulaire Modal** : Validation JavaScript avec messages d'erreur
- **Effets Visuels** : Animations de "bump" sur tous les boutons

### 🏰 Pages Thématiques
- **Accueil** : Présentation de l'agence avec destinations fantastiques
- **Orcosaure** : Page interactive avec compteur de "ptits orcosaures"
- **Voyageation** : Galerie avec système de toasts
- **Trompage** : Page 404 personnalisée et humoristique

## 🗂️ Structure du Projet

```
📦 voyageation/
├── 📄 main.html          # Page d'accueil
├── 📄 orcosaure.html     # Page compteur interactif
├── 📄 voyageation.html   # Page galerie avec toasts
├── 📄 trompage.html      # Page 404 personnalisée
├── 🎨 main.css           # Styles page d'accueil
├── 🎨 orcosaure.css      # Styles page orcosaure
├── 🎨 voyageation.css    # Styles page voyageation
├── 🎨 trompage.css       # Styles page 404
├── 📜 main.js            # Scripts page d'accueil
├── 📜 orcosaure.js       # Scripts page orcosaure
├── 📜 voyageation.js     # Scripts page voyageation
├── 🖼️ Avion.png          # Image d'en-tête
├── 🖼️ Dalaran.png        # Destination : Dalaran
├── 🖼️ Exodar.png         # Destination : Exodar
├── 🖼️ Stormwind.png      # Destination : Stormwind
├── 🖼️ Fleurs.png         # Destination : Champs de fleurs
├── 🖼️ Foret.png          # Destination : Forêt mystique
├── 🖼️ Plage.png          # Destination : Plage paradisiaque
├── 🖼️ Trompage.png       # Image page 404
├── 🖼️ booking.png        # Icône de réservation
└── 📄 README.md          # Documentation du projet
```

## 🚀 Installation et Lancement

### Prérequis
- Serveur web local (Live Server, XAMPP, WAMP, etc.)
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)

### Installation Simple
1. **Cloner ou télécharger** le projet :
   ```bash
   git clone [url-du-repository]
   cd voyageation
   ```

2. **Lancer un serveur local** :
   - **Option 1** - Avec VS Code et Live Server :
     - Installer l'extension "Live Server"
     - Clic droit sur `main.html` → "Open with Live Server"
   
   - **Option 2** - Avec Python :
     ```bash
     python -m http.server 8000
     ```
     Puis ouvrir `http://localhost:8000`
   
   - **Option 3** - Avec Node.js :
     ```bash
     npx serve .
     ```

3. **Accéder au site** : Ouvrir `main.html` dans votre navigateur

## 🔧 Guide d'Utilisation

### Navigation
- **Menu Principal** : Utilisez le menu burger (≡) pour naviguer entre les pages
- **Logo** : Cliquez sur le logo pour revenir à l'accueil
- **Dark Mode** : Bouton 🌙/☀️ en haut à droite pour basculer les thèmes

### Fonctionnalités par Page

#### 🏠 Page d'Accueil (`main.html`)
- Présentation des destinations fantastiques
- Formulaire de contact modal (bouton "CONTACTEZ NOUS")
- Navigation vers les autres sections

#### 🐲 Page Orcosaure (`orcosaure.html`)
- **Compteur** : Cliquez sur "Compter un ptit orcosaure" pour incrémenter
- **Reset** : Bouton "Reset" pour remettre à zéro
- **Persistance** : Le compteur est sauvegardé automatiquement

#### 🎉 Page Voyageation (`voyageation.html`)
- **Toasts Centrés** : Boutons pour déclencher des notifications
- **Toasts Aléatoires** : Apparaissent à des positions et rotations variables
- **Auto-disparition** : Les toasts se ferment automatiquement après 3 secondes

#### 😅 Page Trompage (`trompage.html`)
- Page 404 humoristique avec message décalé
- Redirection automatique vers l'accueil

## 🎨 Personnalisation

### Couleurs et Thèmes
Les variables CSS sont centralisées pour faciliter la personnalisation :

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --background-light: #f8f9fa;
  --background-dark: #2c3e50;
  /* ... autres variables */
}
```

### Ajout de Nouvelles Pages
1. Créer les fichiers HTML, CSS et JS
2. Suivre la structure existante pour le dark mode
3. Ajouter les liens dans le menu burger de chaque page

## 💾 Données Persistantes

Le site utilise `localStorage` pour sauvegarder :
- **Préférence de thème** (`theme`) : 'light' ou 'dark'
- **Compteur orcosaure** (`orcosaureCount`) : Nombre entier

## 🌐 Déploiement

### Hébergement Plesk (Recommandé)
1. **Création du dépôt Git** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [url-repository]
   git push -u origin main
   ```

2. **Configuration Plesk** :
   - Aller dans "Git" → "Clone Repository"
   - Entrer l'URL du repository
   - Définir le répertoire de destination (ex: `httpdocs/voyageation`)
   - Activer le déploiement automatique

3. **Accès** : `https://votre-domaine.com/voyageation/main.html`

### Autres Options
- **GitHub Pages** : Idéal pour un hébergement gratuit
- **Netlify/Vercel** : Déploiement automatique depuis Git
- **Serveur FTP** : Upload direct des fichiers

## 🔍 Technologies Utilisées

- **HTML5** : Structure sémantique moderne
- **CSS3** : 
  - Flexbox et Grid pour le layout
  - Variables CSS pour la cohérence
  - Animations et transitions
  - Media queries pour le responsive
- **JavaScript ES6** :
  - API localStorage
  - Manipulation du DOM
  - Gestion d'événements
  - Functions fléchées et const/let

## 📱 Compatibilité

| Navigateur | Version Minimale | Support |
|------------|------------------|---------|
| Chrome     | 60+              | ✅ Complet |
| Firefox    | 55+              | ✅ Complet |
| Safari     | 12+              | ✅ Complet |
| Edge       | 79+              | ✅ Complet |
| IE         | -                | ❌ Non supporté |

## 🔮 Améliorations Futures

- [ ] Système de réservation fonctionnel
- [ ] Base de données pour les commentaires
- [ ] Galerie photos dynamique
- [ ] Géolocalisation des destinations
- [ ] PWA (Progressive Web App)
- [ ] Animations GSAP avancées
- [ ] Intégration API météo fantastique

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. **Créer** une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. **Commit** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrir** une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Crédits

- **Images** : Univers World of Warcraft (usage éducatif/parodique)
- **Inspiration** : Sites de voyage modernes
- **Développement** : Projet personnel de démonstration

## 📞 Contact

Pour toute question ou suggestion concernant ce projet :

- **GitHub** : https://github.com/JSomozaP

---

*"Voyageation - Parce que voyager dans des mondes imaginaires, c'est moins cher et plus sûr !"* 🌟

## 📸 Captures d'Écran

### Interface Principale
![Interface principale](Z%20Page%20principale.png)

### Menu Burger
![Menu burger](Z%20interface%20menu%20burger.png)

### Compteur Orcosaure
![Compteur](Z%20compteur%20orcosaure.png)

### Toasts Notifications
![Toasts](Z%20page%20toast.png)

### Formulaire Modal
![Formulaire](Z%20ouverture%20formulaire.png)
