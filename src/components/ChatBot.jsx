import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, AlertCircle } from "lucide-react";
import mistralService from "../services/mistralService";

export default function ChatBot({ show, onToggle }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Bonjour ! Je suis votre assistant virtuel TimeTravel Agency propulsé par Mistral AI. Comment puis-je vous aider à planifier votre voyage temporel ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setError(null);

    // Ajouter le message de l'utilisateur
    const newUserMessage = { role: "user", content: userMessage };
    setMessages((prev) => [...prev, newUserMessage]);
    setIsTyping(true);

    try {
      // Vérifier si l'API est configurée
      if (!mistralService.isConfigured()) {
        throw new Error("API_KEY_NOT_CONFIGURED");
      }

      // Préparer l'historique des messages pour l'API
      const conversationHistory = [...messages, newUserMessage].map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      // Appeler l'API Mistral AI
      const botResponse = await mistralService.sendMessage(conversationHistory);

      setMessages((prev) => [...prev, { role: "assistant", content: botResponse }]);
      setIsTyping(false);
    } catch (err) {
      console.error("Chatbot error:", err);
      setIsTyping(false);

      let errorMessage = "";
      let fallbackResponse = "";

      if (err.message === "API_KEY_NOT_CONFIGURED") {
        errorMessage = "⚠️ Clé API non configurée";
        fallbackResponse = mistralService.getFallbackResponse(userMessage);
      } else if (err.message === "INVALID_API_KEY") {
        errorMessage = "⚠️ Clé API invalide";
        fallbackResponse = mistralService.getFallbackResponse(userMessage);
      } else {
        errorMessage = "⚠️ Erreur de connexion";
        fallbackResponse = mistralService.getFallbackResponse(userMessage);
      }

      setError(errorMessage);
      setMessages((prev) => [...prev, { role: "assistant", content: fallbackResponse }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onToggle}
        className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 bg-gradient-to-r from-gold-500 to-yellow-400 text-black p-4 rounded-full shadow-2xl z-40">
        {show ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed right-2 sm:right-6 bottom-20 sm:bottom-24 w-[calc(100vw-1rem)] sm:w-96 h-[calc(100vh-10rem)] sm:h-[600px] max-h-[calc(100vh-10rem)] sm:max-h-[600px] bg-gray-900 rounded-2xl shadow-2xl z-40 flex flex-col border border-gold-500/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-gold-500 to-yellow-400 p-4 flex items-center gap-3">
              <Bot className="w-8 h-8 text-black" />
              <div className="flex-1">
                <h3 className="font-bold text-black flex items-center gap-2">
                  Assistant Voyage Temporel
                  {mistralService.isConfigured() && <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">AI</span>}
                </h3>
                <p className="text-xs text-black/70">{error ? error : mistralService.isConfigured() ? "Propulsé par Mistral AI" : "Mode fallback actif"}</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === "user" ? "bg-gradient-to-r from-gold-500 to-yellow-400 text-black" : "bg-gray-800 text-white"}`}>
                    <p className="text-sm whitespace-pre-line">{msg.content}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-gray-800 p-3 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Posez votre question..."
                  className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="bg-gradient-to-r from-gold-500 to-yellow-400 text-black p-3 rounded-full hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
