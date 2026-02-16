import { motion } from "framer-motion";
import { Shield, Award, Globe, Sparkles } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Protocoles de sécurité temporelle certifiés ISO 2850",
    },
    {
      icon: Award,
      title: "Luxe & Confort",
      description: "Service 5 étoiles dans toutes les époques",
    },
    {
      icon: Globe,
      title: "3 destinations",
      description: "Paris 1889, Crétacé, Florence 1504",
    },
    {
      icon: Sparkles,
      title: "Expérience unique",
      description: "Vivez l'histoire comme jamais auparavant",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            L'agence <span className="text-gradient">pionnière</span>
            <br />
            du voyage temporel
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Depuis 2087, TimeTravel Agency révolutionne le tourisme en offrant des expériences immersives dans les périodes les plus fascinantes de l'histoire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all group">
              <feature.icon className="w-12 h-12 text-gold-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
