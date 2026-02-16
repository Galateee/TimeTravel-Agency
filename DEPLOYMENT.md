# TimeTravel Agency - Guide de Déploiement Vercel 🚀

## Déploiement sur Vercel

### Méthode 1 : Via l'interface web (Recommandé)

#### Étape 1 : Préparer le repository Git

1. **Initialiser Git** (si pas déjà fait)

```bash
git init
git add .
git commit -m "Initial commit - TimeTravel Agency"
```

2. **Créer un repository sur GitHub**
   - Allez sur [github.com](https://github.com)
   - Cliquez sur "New repository"
   - Nom : `timetravel-agency`
   - Créez le repository

3. **Pousser le code**

```bash
git remote add origin https://github.com/VOTRE_USERNAME/timetravel-agency.git
git branch -M main
git push -u origin main
```

#### Étape 2 : Déployer sur Vercel

1. **Créer un compte sur Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Inscrivez-vous avec GitHub (gratuit)

2. **Importer le projet**
   - Cliquez sur "Add New Project"
   - Sélectionnez votre repository `timetravel-agency`
   - Cliquez sur "Import"

3. **Configurer le projet**
   - Framework Preset : **Vite** (détecté automatiquement)
   - Build Command : `npm run build` (par défaut)
   - Output Directory : `dist` (par défaut)

4. **Ajouter les variables d'environnement** (Optionnel mais recommandé)
   - Cliquez sur "Environment Variables"
   - Ajoutez :
     - Name: `VITE_MISTRAL_API_KEY`
     - Value: `votre_cle_mistral_api`
   - Cliquez sur "Add"

5. **Déployer**
   - Cliquez sur "Deploy"
   - ⏳ Attendez 2-3 minutes
   - ✅ Votre site est en ligne !

---

### Méthode 2 : Via Vercel CLI (Plus rapide)

#### Installation

```bash
npm install -g vercel
```

#### Connexion

```bash
vercel login
```

#### Déploiement

```bash
# À la racine du projet
vercel

# Suivez les instructions :
# - Set up and deploy? Y
# - Which scope? (votre compte)
# - Link to existing project? N
# - What's your project's name? timetravel-agency
# - In which directory is your code located? ./
# - Auto-detected Project Settings (Vite)? Y
```

#### Configuration des variables d'environnement

```bash
vercel env add VITE_MISTRAL_API_KEY
# Collez votre clé API Mistral
# Sélectionnez : Production, Preview, Development
```

#### Déploiement en production

```bash
vercel --prod
```

---

## 🎉 Après le déploiement

### Votre site sera accessible à :

```
https://timetravel-agency.vercel.app
```

(ou un nom généré automatiquement)

### Configuration du domaine personnalisé (Optionnel)

1. Dans le dashboard Vercel
2. Settings → Domains
3. Ajoutez votre domaine custom

---

## 🔄 Déploiements automatiques

Une fois configuré avec GitHub :

- ✅ Chaque `git push` déploie automatiquement
- ✅ Preview deployments pour chaque PR
- ✅ Rollback en 1 clic

---

## 📝 Checklist avant déploiement

- ✅ Build local fonctionne : `npm run build`
- ✅ Pas d'erreurs dans le code
- ✅ `.env` dans `.gitignore` (sécurité)
- ✅ Assets optimisés
- ✅ README.md à jour

---

## 🐛 Troubleshooting

### Build failed

```bash
# Testez le build localement
npm run build

# Si erreurs, corrigez-les avant de déployer
```

### Variables d'environnement

- Vérifiez qu'elles commencent par `VITE_`
- Redéployez après avoir ajouté des variables

### Assets manquants

- Vérifiez que les chemins sont absolus : `/images/...` et non `../images/...`

---

## 💰 Coûts

- **Gratuit** pour usage personnel
- Bande passante illimitée
- 100 GB-hours de compute gratuit/mois

---

## 📚 Ressources

- [Documentation Vercel](https://vercel.com/docs)
- [Guide Vite + Vercel](https://vercel.com/docs/frameworks/vite)
- [Variables d'environnement](https://vercel.com/docs/concepts/projects/environment-variables)
