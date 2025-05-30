# Documentation du Site Web de Sensibilisation à la Rougeole

## Vue d'ensemble

Ce site web a été développé pour sensibiliser le public à la rougeole, ses symptômes, sa prévention et son traitement. Il offre une interface moderne et responsive, avec des fonctionnalités interactives comme une section de commentaires et une bibliothèque de documents.

## Structure du projet

Le projet est construit avec React.js et utilise les technologies suivantes :
- React Router pour la navigation
- Tailwind CSS pour le style
- Lucide React pour les icônes

### Organisation des fichiers

```
rougeole-sensibilisation/
├── public/
│   └── images/           # Images utilisées dans le site
├── src/
│   ├── components/       # Composants réutilisables
│   │   ├── AccordionFAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── ImageGallery.jsx
│   │   ├── InfoCard.jsx
│   │   └── StatsDisplay.jsx
│   ├── pages/            # Pages du site
│   │   ├── AboutPage.jsx
│   │   ├── CommentsPage.jsx
│   │   ├── DocumentsPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── PreventionPage.jsx
│   │   ├── ResourcesPage.jsx
│   │   ├── StatsPage.jsx
│   │   └── SymptomsPage.jsx
│   ├── App.jsx           # Composant principal avec les routes
│   └── main.tsx          # Point d'entrée de l'application
```

## Fonctionnalités principales

### 1. Navigation responsive

Le site dispose d'une navigation adaptative qui s'ajuste aux écrans mobiles et desktop. Sur mobile, un menu hamburger permet d'accéder à toutes les sections.

### 2. Galerie d'images

Le composant `ImageGallery` permet d'afficher les images des symptômes de la rougeole avec une fonctionnalité de visualisation en plein écran au clic.

### 3. Section commentaires

La page Commentaires permet aux visiteurs de laisser des messages. Actuellement, la notification par email est simulée côté front-end.

**Pour implémenter des notifications email réelles :**
- Créer un backend (Node.js/Express, PHP, etc.)
- Ajouter un endpoint API pour recevoir les commentaires
- Utiliser un service d'envoi d'emails (SendGrid, Mailgun, etc.)
- Modifier la fonction `handleSubmit` dans `CommentsPage.jsx` pour appeler cette API

### 4. Section documents

La page Documents permet de télécharger et d'afficher des fichiers. Comme pour les commentaires, l'upload et les notifications sont simulés côté front-end.

**Pour implémenter un système de fichiers réel :**
- Créer un backend avec stockage de fichiers
- Ajouter des endpoints API pour l'upload et le téléchargement
- Modifier les fonctions dans `DocumentsPage.jsx` pour utiliser ces API

## Guide de maintenance

### Ajouter de nouvelles pages

1. Créer un nouveau fichier dans le dossier `src/pages/`
2. Ajouter la route dans `App.jsx`
3. Ajouter un lien dans le composant `Header.jsx`

### Modifier le style

Le site utilise Tailwind CSS. Pour modifier le style :
1. Éditer les classes dans les composants concernés
2. Pour des modifications globales, éditer `tailwind.config.js`

### Ajouter des images

1. Placer les nouvelles images dans le dossier `public/images/`
2. Référencer les images avec le chemin `/images/nom-de-l-image.jpg`

## Déploiement

Le site est actuellement déployé à l'URL : https://wjcyomrt.manus.space

Pour redéployer après modifications :
1. Exécuter `pnpm run build` pour générer les fichiers de production
2. Déployer le contenu du dossier `dist/` sur votre hébergeur

## Évolutions futures possibles

1. **Backend pour les commentaires et documents**
   - Implémenter un serveur Node.js/Express
   - Ajouter une base de données (MongoDB, MySQL)
   - Configurer l'envoi d'emails réels

2. **Authentification**
   - Ajouter un système de connexion pour les administrateurs
   - Permettre la modération des commentaires

3. **Statistiques en temps réel**
   - Intégrer des API de données de santé publique
   - Afficher des graphiques interactifs

4. **Traduction multilingue**
   - Ajouter un sélecteur de langue
   - Traduire le contenu dans plusieurs langues

## Contact

Pour toute question ou assistance technique, veuillez contacter l'administrateur à l'adresse : Salimalabdaoui203@gmail.com
