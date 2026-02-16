import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-lg shadow-2xl" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Clock className="w-8 h-8 text-gold-500" />
            <span className="text-2xl font-serif font-bold text-gradient">TimeTravel Agency</span>
          </div>

          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <button onClick={() => scrollToSection("home")} className="hover:text-gold-500 transition">
                Accueil
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("destinations")} className="hover:text-gold-500 transition">
                Destinations
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("reservation")} className="hover:text-gold-500 transition">
                Réserver
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("reservation")}
                className="bg-gradient-to-r from-gold-500 to-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform">
                Voyager maintenant
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}
