# ⏰ TimeTravel Agency - Webapp Interactive

![TimeTravel Agency](https://img.shields.io/badge/Status-Production-success)
![React](https://img.shields.io/badge/React-18.2-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Mistral AI](https://img.shields.io/badge/Mistral%20AI-Chatbot-orange)

**🌐 Application déployée :** [https://timetravel-agency-seven.vercel.app](https://timetravel-agency-seven.vercel.app)

---

## 📝 Description du Projet

TimeTravel Agency est une **webapp moderne et immersive** pour une agence de voyage temporel fictive. Elle permet aux visiteurs de découvrir et réserver des voyages vers **3 destinations temporelles fascinantes** :

- **🗼 Paris 1889** - La Belle Époque et l'Exposition Universelle
- **🦕 Crétacé -65M** - L'ère des dinosaures et la nature préhistorique
- **🎨 Florence 1504** - La Renaissance italienne au temps de Michel-Ange

Ce projet a été développé dans le cadre du cours **M1/M2 Digital & IA** en utilisant des outils d'IA générative pour la conception, le design et le développement.

---

## 🛠️ Technologies Utilisées

### Frontend & Build

- **React 18.2** - Bibliothèque JavaScript pour interfaces utilisateur
- **Vite 5.1** - Build tool ultra-rapide avec HMR
- **Tailwind CSS 3.4** - Framework CSS utility-first
- **Framer Motion 11.0** - Librairie d'animations React
- **Lucide React 0.344** - Icônes modernes et personnalisables

### Intelligence Artificielle

- **Mistral AI API** - Chatbot conversationnel avec modèle `mistral-small-latest`
- **Algorithme de recommandation** - Quiz personnalisé avec scoring pondéré

### Design & UX

- Thème sombre premium avec accents dorés (#D4AF37)
- Effets glassmorphism et gradients dynamiques
- Typography : Playfair Display (serif) + Inter (sans-serif)
- Design responsive mobile-first optimisé pour iPhone

### Déploiement

- **Vercel** - Hébergement et CI/CD automatique
- **GitHub** - Versioning et collaboration

---

## ✨ Fonctionnalités Implémentées

### Pages & Sections Principales

- ✅ **Hero Section** - Vidéo immersive plein écran avec animations
- ✅ **À Propos** - Présentation de l'agence avec valeurs et promesses
- ✅ **Destinations** - 3 cards interactives avec modales détaillées (vidéos + infos complètes)
- ✅ **Quiz Personnalisé** - 4 questions avec algorithme de recommandation intelligent
- ✅ **Chatbot IA** - Assistant virtuel conversationnel propulsé par Mistral AI
- ✅ **Formulaire de Réservation** - Validation complète avec animation de confirmation
- ✅ **Navigation Sticky** - Header avec smooth scroll vers les sections
- ✅ **Footer** - Informations de contact et liens réseaux sociaux

### Fonctionnalités Avancées

- ✅ **Animations au scroll** - Apparition progressive des éléments (Framer Motion)
- ✅ **Micro-interactions** - Effets hover, transitions fluides
- ✅ **Modales interactives** - Split-screen avec vidéos et contenu détaillé
- ✅ **Chatbot contextuel** - Réponses intelligentes basées sur l'historique de conversation
- ✅ **Mode fallback** - Le chatbot fonctionne même sans clé API
- ✅ **Responsive design** - Optimisé pour desktop, tablette et mobile (iPhone 16 Pro testé)
- ✅ **Performance optimisée** - Lazy loading, code splitting, GPU acceleration

---

## 🤖 Outils IA Utilisés

### Développement du Code

- **Claude 4.5 Sonnet** (via GitHub Copilot)
  - Génération de l'architecture React complète
  - Création des 8 composants avec bonnes pratiques
  - Intégration Mistral AI API avec gestion d'erreurs
  - Algorithme de quiz avec scoring personnalisé
  - Corrections responsive pour mobile iPhone 16 Pro
  - ~100% du code généré par IA sous supervision humaine

### Chatbot Conversationnel

- **Mistral AI API** (`mistral-small-latest`)
  - Agent conversationnel temps réel
  - Personnalité définie : expert voyage temporel passionné d'histoire
  - Réponses sur les 3 destinations, prix, durées, sécurité
  - Gestion de l'historique de conversation
  - Mode fallback avec réponses pré-définies

### Assets & Médias (Projet antérieur)

- **Midjourney** - Génération des 8 images de destinations (Paris, Crétacé, Florence)
- **Runway Gen-4 Turbo** - Création de vidéos cinématiques
- **Kling AI** - Génération de vidéos supplémentaires

---

## 📦 Installation et Lancement

### Prérequis

- **Node.js** 18+ et npm

### Étapes d'installation

1. **Cloner le projet**

```bash
git clone https://github.com/Galateee/TimeTravel-Agency.git
cd TimeTravel-Agency
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configurer l'API Mistral AI (Optionnel mais recommandé)**

Le chatbot utilise l'API Mistral AI pour des réponses intelligentes. Sans clé API, il fonctionne en mode fallback avec réponses pré-définies.

**Obtenir une clé API gratuite :**

- Créer un compte sur [console.mistral.ai](https://console.mistral.ai/)
- Aller dans "API Keys" → "Create new key"
- Copier la clé (affichée une seule fois)

**Configuration :**
Créez un fichier `.env` à la racine du projet :

```bash
VITE_MISTRAL_API_KEY=votre_cle_api_ici
```

4. **Lancer le serveur de développement**

```bash
npm run dev
```

5. **Ouvrir dans le navigateur**

```
http://localhost:3000
```

### Build pour production

```bash
npm run build
```

Le dossier `dist/` contiendra les fichiers optimisés prêts pour le déploiement.

---

## 🚀 Déploiement

### Application en ligne

**URL de production :** [https://timetravel-agency-seven.vercel.app](https://timetravel-agency-seven.vercel.app)

### Déployer votre propre version

**Via Vercel (Recommandé) :**

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Importer le repository GitHub
3. Ajouter la variable d'environnement `VITE_MISTRAL_API_KEY` dans les settings
4. Déployer automatiquement

**Alternative :**

- **Netlify** : Drag & drop du dossier `dist/`
- **GitHub Pages** : Push du dossier `dist/` sur branche `gh-pages`

---

## 🏗️ Structure du Projet

```
TimeTravel-Agency/
├── public/                    # Assets statiques
│   ├── videos/               # 5 vidéos (hero + destinations)
│   └── images/               # 8 images organisées par destination
│       ├── paris/           # 3 images Paris 1889
│       ├── cretace/         # 3 images Crétacé
│       └── florence/        # 3 images Florence 1504
├── src/
│   ├── components/           # 8 composants React
│   │   ├── Header.jsx       # Navigation sticky
│   │   ├── Hero.jsx         # Section hero avec vidéo
│   │   ├── About.jsx        # Présentation de l'agence
│   │   ├── Destinations.jsx # Galerie des 3 destinations
│   │   ├── Quiz.jsx         # Quiz de recommandation
│   │   ├── ChatBot.jsx      # Chatbot conversationnel IA
│   │   ├── Reservation.jsx  # Formulaire de réservation
│   │   └── Footer.jsx       # Pied de page
│   ├── config/
│   │   └── mistral.js       # Configuration API Mistral
│   ├── services/
│   │   └── mistralService.js # Service API avec fallback
│   ├── App.jsx              # Composant principal
│   ├── main.jsx             # Point d'entrée
│   └── index.css            # Styles Tailwind
├── .env.example              # Template des variables d'environnement
├── package.json              # Dépendances npm
├── tailwind.config.js        # Configuration Tailwind personnalisée
├── vite.config.js            # Configuration Vite
├── vercel.json               # Configuration déploiement Vercel
└── README.md                 # Documentation (ce fichier)
```

---

## 🎨 Composants Principaux

### Header

Navigation sticky avec liens smooth scroll, effet de transparence au scroll.

### Hero

Section plein écran avec vidéo background, animations texte progressives, CTA vers destinations.

### About

Présentation de l'agence avec 3 cards de valeurs, animations au scroll.

### Destinations

3 cards interactives (Paris, Crétacé, Florence) avec hover effects, modales split-screen avec vidéo + détails complets (durée, prix, points forts).

### Quiz

4 questions de préférences (ambiance, exploration, art, aventure), algorithme de scoring pondéré, résultat personnalisé avec recommandation détaillée.

### ChatBot

Widget flottant en bas à gauche, interface conversationnelle fluide, intégration Mistral AI avec historique, réponses contextuelles sur destinations/prix/sécurité.

### Reservation

Formulaire complet (destination, date, voyageurs, contact), validation native HTML5 + styles personnalisés, animation de confirmation après soumission.

### Footer

Informations de contact, liens réseaux sociaux, crédits projet.

---

## 📊 Performances & Optimisations

- ✅ **Lazy loading** des images pour chargement rapide
- ✅ **Vidéos optimisées** avec compression et autoplay muted
- ✅ **Code splitting** automatique avec Vite
- ✅ **Animations GPU-accelerated** via Framer Motion
- ✅ **Bundle optimisé** : ~302KB après build
- ✅ **Responsive design** testé sur iPhone 16 Pro
- ✅ **Corrections mobile spécifiques** : modales adaptées, champs formulaire optimisés

---

## 🎓 Contexte Pédagogique

Ce projet a été réalisé dans le cadre du cours **M1/M2 Digital & IA à YNOV**.

### Objectifs du projet

- Utiliser des outils d'IA générative pour le développement web complet
- Créer une interface moderne et immersive avec React
- Intégrer un agent conversationnel intelligent (Mistral AI)
- Implémenter un système de recommandation personnalisé
- Appliquer les bonnes pratiques de développement et déploiement

### Compétences développées

- 🤖 **Prompting avancé** avec Claude 4.5 Sonnet pour génération de code
- ⚛️ **Architecture React** moderne avec composants réutilisables
- 🎨 **Design UI/UX** avec Tailwind CSS et animations Framer Motion
- 🧠 **Intégration IA** conversationnelle via API REST
- 📱 **Responsive Design** et optimisations mobile spécifiques
- 🚀 **CI/CD** avec déploiement automatique sur Vercel
- 📝 **Documentation** open source et bonnes pratiques Git

### Méthodologie de travail avec l'IA

1. **Analyse des besoins** et définition architecture (avec assistance IA)
2. **Génération itérative** des composants React avec Claude
3. **Tests et corrections** sur navigateurs desktop et mobile réel
4. **Optimisations responsive** suite aux tests iPhone 16 Pro
5. **Intégration API** Mistral AI avec gestion d'erreurs robuste
6. **Déploiement** et configuration production sur Vercel

---

## 📄 Crédits et Ressources

### Développement

- **Code Source** : Généré avec **Claude 4.5 Sonnet** (GitHub Copilot)
- **Architecture** : React 18 + Vite + Tailwind CSS
- **Animations** : Framer Motion 11.0
- **Icônes** : Lucide React

### Intelligence Artificielle

- **Chatbot** : API **Mistral AI** (modèle `mistral-small-latest`)
- **Génération de code** : **Claude 4.5 Sonnet** via GitHub Copilot
- **Assistance développement** : Prompting avancé et débogage

### Assets & Médias

- **Images destinations** : **Midjourney** (8 images - Paris, Crétacé, Florence)
- **Vidéos cinématiques** : **Runway Gen-4 Turbo** + **Kling AI** (5 vidéos)
- **Hébergement assets** : Local dans `/public` (best practices)

### Outils & Plateformes

- **Versioning** : Git + GitHub ([Galateee/TimeTravel-Agency](https://github.com/Galateee/TimeTravel-Agency))
- **Déploiement** : Vercel ([timetravel-agency-seven.vercel.app](https://timetravel-agency-seven.vercel.app))
- **IDE** : Visual Studio Code avec GitHub Copilot

### Étudiant

- **Robin Vidal** - M1/M2 Digital & IA - YNOV Campus
- Février 2026

---

## 📝 Licence

Projet pédagogique réalisé dans le cadre universitaire.  
Utilisation libre pour apprentissage, portfolio et démonstration de compétences.

---

## 🔗 Liens Utiles

- **Application Live** : [https://timetravel-agency-seven.vercel.app](https://timetravel-agency-seven.vercel.app)
- **Repository GitHub** : [https://github.com/Galateee/TimeTravel-Agency](https://github.com/Galateee/TimeTravel-Agency)
- **Mistral AI Console** : [https://console.mistral.ai](https://console.mistral.ai)
- **Documentation React** : [https://react.dev](https://react.dev)
- **Documentation Tailwind** : [https://tailwindcss.com](https://tailwindcss.com)

---

<div align="center">

**⏰ Voyagez à travers le temps avec élégance et sécurité ! ⏰**

_Propulsé par React, Mistral AI et l'imagination humaine_ 🚀

</div>
