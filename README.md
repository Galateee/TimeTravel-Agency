# TimeTravel Agency - Webapp Interactive 🚀⏰

![TimeTravel Agency](https://img.shields.io/badge/Status-Production-success)
![React](https://img.shields.io/badge/React-18.2-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

Webapp moderne et immersive pour une agence de voyage temporel fictive, créée avec l'aide de l'IA générative.

## 🎯 Description

TimeTravel Agency est une webapp interactive qui permet aux visiteurs de découvrir et réserver des voyages vers 3 destinations temporelles fascinantes :

- **Paris 1889** - La Belle Époque et l'Exposition Universelle
- **Crétacé -65M** - L'ère des dinosaures et la nature préhistorique
- **Florence 1504** - La Renaissance italienne au temps de Michel-Ange

## ✨ Fonctionnalités

### Pages & Sections

- ✅ **Page d'accueil** avec hero section vidéo immersive
- ✅ **Section À propos** présentant l'agence
- ✅ **Galerie de destinations** avec cards interactives et modales détaillées
- ✅ **Quiz personnalisé** de recommandation (4 questions)
- ✅ **Chatbot IA** conversationnel intégré
- ✅ **Formulaire de réservation** avec validation
- ✅ **Design responsive** (mobile-first)

### Animations

- ✅ Animations au scroll avec **Framer Motion**
- ✅ Micro-interactions sur les boutons et cards
- ✅ Transitions fluides entre les sections
- ✅ Effets de hover sur les éléments interactifs

### Intelligence Artificielle

- ✅ **Chatbot conversationnel** qui répond aux questions sur les destinations, prix, sécurité
- ✅ **Système de recommandation** basé sur un quiz de préférences
- ✅ Personnalité d'agent de voyage temporel (professionnel, passionné d'histoire)

## 🛠️ Stack Technique

### Frontend

- **React** 18.2 - Framework JavaScript
- **Vite** 5.1 - Build tool ultra-rapide
- **Tailwind CSS** 3.4 - Framework CSS utility-first
- **Framer Motion** 11.0 - Librairie d'animations
- **Lucide React** - Icônes modernes

### Design

- Thème sombre premium avec accents dorés
- Police serif (Playfair Display) pour les titres
- Police sans-serif (Inter) pour le corps du texte
- Effets glassmorphism
- Gradients dynamiques

### Assets

- Images générées avec **IA générative** (projet TimeTravel Agency #1)
- Vidéos créées avec **Runway Gen-4** et **Kling AI**
- Hébergement local des assets

## 🤖 IA Utilisées

### Développement

- **Claude 4.5 Sonnet** (via GitHub Copilot) - Génération du code complet
- Architecture React moderne et bonnes pratiques
- Composants réutilisables et maintenables

### Chatbot IA Conversationnel

- **Mistral AI API** (mistral-small-latest) - IA conversationnelle
- Intégration API avec gestion d'erreurs et mode fallback
- Personnalité définie : agent de voyage temporel expert et passionné
- Réponses intelligentes et contextuelles basées sur l'historique de conversation
- Voir [MISTRAL_SETUP.md](MISTRAL_SETUP.md) pour la configuration

### Quiz de Recommandation

- Algorithme de scoring pondéré
- 4 questions ciblées sur les préférences
- Recommandation personnalisée avec explication détaillée

### Assets (Projet précédent)

- **Midjourney** - Génération des images des destinations
- **Runway Gen-4 Turbo** - Vidéos cinématiques
- **Kling AI** - Vidéos supplémentaires

## 📦 Installation

### Prérequis

- Node.js 18+ et npm

### Étapes

1. **Cloner le projet**

```bash
cd "TimeTravel Agency"
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configurer l'API Mistral AI (optionnel mais recommandé)**

Créez un fichier `.env` à la racine et ajoutez :

```bash
VITE_MISTRAL_API_KEY=votre_cle_api_ici
```

> **Note :** Sans clé API, le chatbot fonctionne en mode fallback.  
> Voir [MISTRAL_SETUP.md](MISTRAL_SETUP.md) pour obtenir une clé gratuite.

4. **Lancer le serveur de développement**

```bash
npm run dev
```

5. **Ouvrir dans le navigateur**

```
http://localhost:3000
```

## 🏗️ Structure du Projet

```
TimeTravel Agency/
├── public/                    # Assets statiques
├── src/
│   ├── components/           # Composants React
│   │   ├── Header.jsx       # Navigation sticky
│   │   ├── Hero.jsx         # Section hero avec vidéo
│   │   ├── About.jsx        # Présentation de l'agence
│   │   ├── Destinations.jsx # Galerie des 3 destinations
│   │   ├── Quiz.jsx         # Quiz de recommandation
│   │   ├── ChatBot.jsx      # Chatbot conversationnel IA
│   │   ├── Reservation.jsx  # Formulaire de réservation
│   │   └── Footer.jsx       # Pied de page
│   ├── App.jsx              # Composant principal
│   ├── main.jsx             # Point d'entrée
│   └── index.css            # Styles Tailwind
├── package.json             # Dépendances
├── tailwind.config.js       # Configuration Tailwind
├── vite.config.js           # Configuration Vite
└── README.md                # Documentation
```

## 🎨 Composants Principaux

### Header

Navigation sticky avec effet de scroll, liens de navigation smooth scroll vers les sections.

### Hero

Section hero plein écran avec vidéo d'arrière-plan, animations de texte progressives, CTA vers les destinations.

### Destinations

Cards interactives pour les 3 époques, modal détaillé avec vidéo et informations complètes, système de hover effects.

### Quiz

4 questions de préférences, algorithme de recommandation intelligent, résultat personnalisé avec description détaillée.

### ChatBot

Widget flottant en bas à droite, interface de conversation fluide, réponses contextuelles sur les destinations, prix, sécurité.

### Reservation

Formulaire complet avec validation, sélection de destination et dates, message de confirmation animé.

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
npm run build
# Déployer le dossier dist/ sur Vercel
```

### Netlify

```bash
npm run build
# Drag & drop du dossier dist/ sur Netlify
```

### GitHub Pages

```bash
npm run build
# Pousser le dossier dist/ sur la branche gh-pages
```

## 📊 Performances

- ✅ Lazy loading des images
- ✅ Optimisation des vidéos (compression)
- ✅ Code splitting automatique (Vite)
- ✅ Animations GPU-accelerated (Framer Motion)
- ✅ Bundle size optimisé

## 🎓 Contexte Pédagogique

Ce projet a été réalisé dans le cadre d'un cours de **M1/M2 Digital & IA** portant sur :

- L'utilisation d'outils d'IA générative pour le développement
- La création d'interfaces modernes et interactives
- L'intégration d'agents conversationnels
- Les bonnes pratiques de développement web

### Compétences Développées

- Utilisation d'IA générative pour le code (Claude 4.5 Sonnet)
- Architecture React et composants réutilisables
- Design moderne avec Tailwind CSS
- Animations fluides avec Framer Motion
- Logique conversationnelle pour chatbot IA
- Algorithmes de recommandation personnalisée

## 📄 Crédits

### Développement

- **Code** : Généré avec Claude 4.5 Sonnet (GitHub Copilot)
- **Framework** : React + Vite + Tailwind CSS
- **Animations** : Framer Motion

### Assets

- **Images destinations** : Midjourney (projet TimeTravel Agency #1)
- **Vidéos** : Runway Gen-4 Turbo + Kling AI
- **Icônes** : Lucide React

### Étudiant

- **Robin Vidal** - M1/M2 Digital & IA - YNOV

## 📝 Licence

Projet pédagogique - Utilisation libre pour apprentissage et portfolio.

---

**⏰ Voyagez à travers le temps avec élégance et sécurité ! ⏰**
