import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Users, Mail, User, Phone, Check } from "lucide-react";

export default function Reservation() {
  const [formData, setFormData] = useState({
    destination: "",
    departureDate: "",
    travelers: "1",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const destinations = [
    { id: "paris", name: "Paris 1889 - Belle Époque", price: "12,500€" },
    { id: "cretace", name: "Crétacé -65M - Ère des Dinosaures", price: "24,900€" },
    { id: "florence", name: "Florence 1504 - Renaissance", price: "15,800€" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Réservation soumise:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        destination: "",
        departureDate: "",
        travelers: "1",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <section id="reservation" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto text-center">
            <div className="bg-green-500/20 border-2 border-green-500 rounded-3xl p-12">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}>
                <Check className="w-20 h-20 text-green-500 mx-auto mb-6" />
              </motion.div>
              <h2 className="text-4xl font-serif font-bold mb-4">Réservation reçue !</h2>
              <p className="text-xl text-gray-300 mb-6">Merci pour votre demande. Notre équipe vous contactera dans les 24h pour finaliser votre voyage temporel.</p>
              <p className="text-gray-400">
                Vous recevrez un email de confirmation à <span className="text-gold-500">{formData.email}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Réservez votre <span className="text-gradient">voyage</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Remplissez ce formulaire et notre équipe vous contactera pour organiser votre aventure temporelle.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-6 sm:p-8 md:p-12">
            {/* Destination */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3 text-gold-500">Destination *</label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white px-3 py-3 sm:px-4 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm cursor-pointer"
                style={{ paddingRight: "2.5rem" }}>
                <option value="">Sélectionnez votre destination</option>
                {destinations.map((dest) => (
                  <option key={dest.id} value={dest.id}>
                    {dest.name} - {dest.price}
                  </option>
                ))}
              </select>
            </div>

            {/* Date et nombre de voyageurs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-2 text-gold-500">Départ *</label>
                <input
                  type="date"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-gray-800 text-white px-3 py-3 sm:px-4 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm [color-scheme:dark] cursor-pointer"
                  style={{ colorScheme: "dark" }}
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-2 text-gold-500">Voyageurs *</label>
                <select
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 text-white px-3 py-3 sm:px-4 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm cursor-pointer"
                  style={{ paddingRight: "2.5rem" }}>
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num > 1 ? "personnes" : "personne"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Nom et prénom */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-3 text-gold-500">
                  <User className="inline w-4 h-4 mr-2" />
                  Prénom *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Jean"
                  className="w-full bg-gray-800 text-white px-3 py-3 sm:px-4 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gold-500">
                  <User className="inline w-4 h-4 mr-2" />
                  Nom *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Dupont"
                  className="w-full bg-gray-800 text-white px-3 py-3 sm:px-4 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm"
                />
              </div>
            </div>

            {/* Email et téléphone */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold mb-3 text-gold-500">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jean.dupont@email.com"
                  className="w-full bg-gray-800 text-white px-3 py-3 sm:px-4 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gold-500">
                  <Phone className="inline w-4 h-4 mr-2" />
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+33 6 12 34 56 78"
                  className="w-full bg-gray-800 text-white px-3 py-3 sm:px-4 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm"
                />
              </div>
            </div>

            {/* Bouton submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-gold-500 to-yellow-400 text-black py-5 rounded-xl text-lg font-bold hover:shadow-2xl transition-shadow">
              Confirmer ma réservation
            </motion.button>

            <p className="text-center text-sm text-gray-500 mt-6">* Champs obligatoires. Vos données sont sécurisées et ne seront pas partagées.</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
