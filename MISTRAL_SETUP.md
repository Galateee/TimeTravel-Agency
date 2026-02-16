# Configuration du Chatbot Mistral AI 🤖

Le chatbot de TimeTravel Agency utilise l'**API Mistral AI** pour fournir des réponses intelligentes et contextuelles.

## 🔑 Obtenir une clé API Mistral (GRATUIT)

1. **Créer un compte** sur [https://console.mistral.ai/](https://console.mistral.ai/)
2. **Vérifier votre email**
3. **Aller dans "API Keys"** dans le menu
4. **Créer une nouvelle clé** ("Create new key")
5. **Copier la clé** (elle ne sera affichée qu'une seule fois)

## ⚙️ Configuration

### 1. Créer le fichier `.env`

À la racine du projet, créez un fichier `.env` (ou renommez `.env.example`) :

```bash
VITE_MISTRAL_API_KEY=votre_cle_api_ici
```

### 2. Redémarrer le serveur

```bash
npm run dev
```

## ✅ Vérification

Une fois configuré, le chatbot affichera :

- Badge **"AI"** dans le header
- Status : **"Propulsé par Mistral AI"**

## 🔄 Mode Fallback

Si l'API n'est pas configurée ou en cas d'erreur :

- Le chatbot **continue de fonctionner** avec des réponses pré-définies
- Status : **"Mode fallback actif"** ou message d'erreur
- L'utilisateur reçoit toujours une réponse utile

## 💰 Tarifs Mistral AI

- **Gratuit** : Quota généreux pour débuter
- **Modèle utilisé** : `mistral-small-latest` (rapide et efficace)
- **Coût** : ~0.001€ par requête après le quota gratuit

## 🔒 Sécurité

- ✅ Le fichier `.env` est **ignoré** par Git
- ✅ Ne jamais commit la clé API
- ✅ Utiliser `.env.example` comme template

## 🎯 Personnalité du Chatbot

Le chatbot est configuré avec la personnalité suivante :

- **Professionnel** mais chaleureux
- **Passionné** d'histoire
- **Expert** en voyage temporel (fictif mais crédible)
- Connaît parfaitement les 3 destinations

## 🛠️ Développement

Le code est organisé en :

- `src/config/mistral.js` - Configuration et prompt système
- `src/services/mistralService.js` - Service API
- `src/components/ChatBot.jsx` - Interface utilisateur

## 📝 Exemple de requêtes

Essayez de poser ces questions au chatbot :

- "Qu'est-ce que je peux voir à Paris en 1889 ?"
- "Quelle destination me conseilles-tu pour un amateur d'art ?"
- "C'est dangereux de voyager au Crétacé ?"
- "Compare-moi Paris 1889 et Florence 1504"
- "Quels sont vos tarifs ?"

## ⚠️ Troubleshooting

### Erreur : "API_KEY_NOT_CONFIGURED"

→ Vérifiez que le fichier `.env` existe et contient votre clé

### Erreur : "INVALID_API_KEY"

→ Vérifiez que la clé API est valide sur console.mistral.ai

### Le chatbot ne répond pas

→ Vérifiez la console du navigateur (F12) pour les erreurs

## 🌐 Documentation Mistral AI

- [Documentation officielle](https://docs.mistral.ai/)
- [Console API](https://console.mistral.ai/)
- [Playground](https://chat.mistral.ai/)
