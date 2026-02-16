import { Clock, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-gold-500" />
              <span className="text-2xl font-serif font-bold text-gradient">TimeTravel Agency</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">L'agence de voyage temporel la plus prestigieuse du monde. Explorez le passé avec élégance et sécurité depuis 2087.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold-500">Destinations</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#destinations" className="hover:text-gold-500 transition">
                  Paris 1889
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-gold-500 transition">
                  Crétacé -65M
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-gold-500 transition">
                  Florence 1504
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold-500">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>
                  12 Quartier des Piou,
                  <br />
                  75013 Astrub, Monde des Douze
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gold-500" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gold-500" />
                <span>contact@timetravel.agency</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 TimeTravel Agency. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold-500 transition">
                Mentions légales
              </a>
              <a href="#" className="hover:text-gold-500 transition">
                Confidentialité
              </a>
              <a href="#" className="hover:text-gold-500 transition">
                CGV
              </a>
            </div>
          </div>
          <p className="text-center text-xs text-gray-600 mt-4">Projet pédagogique - Robin Vidal - M1/M2 Digital & IA | Créé avec IA générative</p>
        </div>
      </div>
    </footer>
  );
}
