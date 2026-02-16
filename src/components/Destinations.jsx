import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, MapPin, Users, Star } from "lucide-react";

export default function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
      id: "paris",
      name: "Paris 1889",
      era: "Belle Époque",
      image: "/images/paris/paris.jpg",
      video: "/videos/paris-1889.mp4",
      description: "Découvrez Paris à l'apogée de la Belle Époque, lors de l'Exposition Universelle.",
      highlights: ["Inauguration de la Tour Eiffel", "Exposition Universelle de 1889", "Vie parisienne raffinée", "Architecture haussmannienne"],
      price: "12,500€",
      duration: "7 jours",
      rating: 4.9,
    },
    {
      id: "cretace",
      name: "Crétacé -65M",
      era: "Ère des Dinosaures",
      image: "/images/cretace/DINO.png",
      video: "/videos/cretace.mp4",
      description: "Vivez une aventure préhistorique unique au temps des dinosaures.",
      highlights: ["Observation des T-Rex", "Paysages préhistoriques", "Végétation primitive", "Sécurité maximale assurée"],
      price: "24,900€",
      duration: "5 jours",
      rating: 5.0,
    },
    {
      id: "florence",
      name: "Florence 1504",
      era: "Renaissance Italienne",
      image: "/images/florence/freepik__renaissance-florence-quattrocento-sunsetlit-skylin__75482.png",
      video: "/videos/florence-1504.mp4",
      description: "Plongez dans le berceau de la Renaissance, au temps de Michel-Ange.",
      highlights: ["Rencontre avec Michel-Ange", "Chefs-d'œuvre de la Renaissance", "Florence au sommet de sa gloire", "Art et culture italienne"],
      price: "15,800€",
      duration: "6 jours",
      rating: 4.8,
    },
  ];

  return (
    <section id="destinations" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Nos <span className="text-gradient">destinations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Trois époques extraordinaires vous attendent. Choisissez votre prochaine aventure temporelle.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedDestination(dest)}>
              <div className="relative h-96 overflow-hidden">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gold-500" />
                  <span className="text-gold-500 text-sm font-semibold">{dest.era}</span>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-2">{dest.name}</h3>
                <p className="text-gray-300 mb-4">{dest.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm">{dest.rating}</span>
                  </div>
                  <div className="text-xl font-bold text-gold-500">{dest.price}</div>
                </div>

                <button className="mt-4 w-full bg-gradient-to-r from-gold-500 to-yellow-400 text-black py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Découvrir
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de détail */}
      {selectedDestination && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDestination(null)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 rounded-3xl max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 overflow-y-auto max-h-[85vh] md:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}>
            {/* Vidéo à gauche */}
            <div className="relative min-h-[200px] md:min-h-[300px] md:h-full">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src={selectedDestination.video} type="video/mp4" />
              </video>
            </div>

            {/* Contenu à droite */}
            <div className="p-4 sm:p-6 pb-20 md:pb-6">
              <button onClick={() => setSelectedDestination(null)} className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black transition z-10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-gold-500" />
                <span className="text-gold-500 text-sm font-semibold">{selectedDestination.era}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-3">{selectedDestination.name}</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">{selectedDestination.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="glass-effect p-3 rounded-lg">
                  <Calendar className="w-5 h-5 text-gold-500 mb-1" />
                  <div className="text-xs text-gray-400">Durée</div>
                  <div className="text-sm font-bold">{selectedDestination.duration}</div>
                </div>
                <div className="glass-effect p-3 rounded-lg">
                  <Users className="w-5 h-5 text-gold-500 mb-1" />
                  <div className="text-xs text-gray-400">Prix/pers.</div>
                  <div className="text-sm font-bold">{selectedDestination.price}</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold mb-2 text-gold-500">Points forts</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {selectedDestination.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  setSelectedDestination(null);
                  document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-gradient-to-r from-gold-500 to-yellow-400 text-black py-3 rounded-full text-sm sm:text-base font-bold hover:scale-105 transition-transform">
                Réserver maintenant
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
