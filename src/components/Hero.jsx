import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToDestinations = () => {
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Vidéo de fond */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-70">
          <source src="/videos/hero-agency.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">Voyagez</span>
            <br />
            <span className="text-white">à travers le temps</span>
          </h1>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
          L'agence de voyage temporel la plus prestigieuse du monde.
          <br />
          Découvrez Paris 1889, le Crétacé ou Florence 1504.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToDestinations}
            className="bg-gradient-to-r from-gold-500 to-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-110 transition-transform shadow-2xl">
            Explorer les destinations
          </button>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="glass-effect px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
            En savoir plus
          </button>
        </motion.div>
      </div>

      {/* Flèche de scroll */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <ArrowDown className="w-8 h-8 text-gold-500 animate-bounce" />
      </motion.div>
    </section>
  );
}
