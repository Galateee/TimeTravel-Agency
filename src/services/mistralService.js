import { MISTRAL_CONFIG, SYSTEM_PROMPT } from "../config/mistral";

/**
 * Service pour interagir avec l'API Mistral AI
 */
class MistralService {
  constructor() {
    this.apiKey = MISTRAL_CONFIG.apiKey;
    this.apiUrl = MISTRAL_CONFIG.apiUrl;
    this.model = MISTRAL_CONFIG.model;
  }

  /**
   * Vérifie si l'API key est configurée
   */
  isConfigured() {
    return !!this.apiKey && this.apiKey !== "your_mistral_api_key_here";
  }

  /**
   * Envoie un message au chatbot Mistral AI
   * @param {Array} messages - Historique des messages
   * @returns {Promise<string>} - Réponse du chatbot
   */
  async sendMessage(messages) {
    if (!this.isConfigured()) {
      throw new Error("API_KEY_NOT_CONFIGURED");
    }

    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: this.model,
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Mistral API Error:", errorData);

        if (response.status === 401) {
          throw new Error("INVALID_API_KEY");
        }
        throw new Error("API_ERROR");
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Error calling Mistral API:", error);
      throw error;
    }
  }

  /**
   * Obtient une réponse de fallback si l'API ne fonctionne pas
   */
  getFallbackResponse(userMessage) {
    const msg = userMessage.toLowerCase();

    // Réponses de secours basiques
    if (msg.includes("prix") || msg.includes("tarif") || msg.includes("coût")) {
      return "Nos tarifs sont les suivants :\n- Paris 1889 : 12 500€ (7 jours)\n- Florence 1504 : 15 800€ (6 jours)\n- Crétacé -65M : 24 900€ (5 jours)\n\nTous nos voyages incluent l'hébergement premium et la sécurité maximale.";
    }

    if (msg.includes("paris")) {
      return "Paris 1889 est une destination exceptionnelle ! Vous découvrirez la Belle Époque, l'inauguration de la Tour Eiffel et l'Exposition Universelle. Une immersion totale dans l'élégance parisienne.";
    }

    if (msg.includes("crétacé") || msg.includes("dinosaure")) {
      return "Le Crétacé est notre destination la plus aventureuse ! Observez les dinosaures dans leur habitat naturel avec une sécurité absolue garantie. Une expérience unique pour les amateurs de nature sauvage.";
    }

    if (msg.includes("florence") || msg.includes("renaissance")) {
      return "Florence 1504, le cœur de la Renaissance ! Rencontrez Michel-Ange, admirez les chefs-d'œuvre en cours de création. Parfait pour les passionnés d'art et d'histoire.";
    }

    if (msg.includes("sécurité") || msg.includes("danger")) {
      return "La sécurité est notre priorité absolue ! Tous nos voyages sont certifiés ISO 2850 et nos guides experts vous accompagnent 24h/24. Nous disposons d'un système d'extraction d'urgence instantané.";
    }

    if (msg.includes("réserv") || msg.includes("book")) {
      return "Pour réserver, utilisez notre formulaire en bas de page. Choisissez votre destination, vos dates et le nombre de voyageurs. Notre équipe vous contactera rapidement pour finaliser votre voyage temporel !";
    }

    return "Je suis là pour vous conseiller sur nos destinations temporelles ! Posez-moi vos questions sur Paris 1889, le Crétacé ou Florence 1504. Je peux vous renseigner sur les prix, activités et la sécurité.";
  }
}

export default new MistralService();
