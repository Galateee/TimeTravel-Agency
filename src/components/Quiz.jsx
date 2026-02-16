import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Lightbulb, ArrowRight, Sparkles } from "lucide-react";

export default function Quiz({ show, onClose }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const questions = [
    {
      question: "Quel type d'expérience recherchez-vous ?",
      options: [
        { text: "Culturelle et artistique", value: "culture", weight: { paris: 2, florence: 3, cretace: 0 } },
        { text: "Aventure et nature", value: "adventure", weight: { paris: 0, florence: 0, cretace: 3 } },
        { text: "Élégance et raffinement", value: "elegance", weight: { paris: 3, florence: 2, cretace: 0 } },
      ],
    },
    {
      question: "Votre période préférée ?",
      options: [
        { text: "Histoire moderne (XIXe-XXe siècle)", value: "modern", weight: { paris: 3, florence: 0, cretace: 0 } },
        { text: "Temps anciens et origines", value: "ancient", weight: { paris: 0, florence: 1, cretace: 3 } },
        { text: "Renaissance et classicisme", value: "renaissance", weight: { paris: 1, florence: 3, cretace: 0 } },
      ],
    },
    {
      question: "Vous préférez :",
      options: [
        { text: "L'effervescence urbaine", value: "urban", weight: { paris: 3, florence: 2, cretace: 0 } },
        { text: "La nature sauvage", value: "nature", weight: { paris: 0, florence: 0, cretace: 3 } },
        { text: "L'art et l'architecture", value: "art", weight: { paris: 2, florence: 3, cretace: 0 } },
      ],
    },
    {
      question: "Votre activité idéale :",
      options: [
        { text: "Visiter des monuments", value: "monuments", weight: { paris: 3, florence: 2, cretace: 0 } },
        { text: "Observer la faune", value: "wildlife", weight: { paris: 0, florence: 0, cretace: 3 } },
        { text: "Explorer des musées", value: "museums", weight: { paris: 2, florence: 3, cretace: 0 } },
      ],
    },
  ];

  const destinations = {
    paris: {
      name: "Paris 1889",
      description:
        "La Belle Époque vous appelle ! Votre sensibilité culturelle et votre goût pour l'élégance font de vous le voyageur idéal pour découvrir Paris lors de l'Exposition Universelle. Admirez la Tour Eiffel fraîchement construite et plongez dans l'effervescence artistique de la capitale française.",
      image: "/images/paris/paris2.jpg",
      color: "from-blue-500 to-purple-500",
    },
    florence: {
      name: "Florence 1504",
      description:
        "La Renaissance italienne vous tend les bras ! Votre passion pour l'art et l'architecture fait de vous un visiteur parfait pour Florence au temps de Michel-Ange. Immergez-vous dans le berceau de la civilisation moderne et côtoyez les plus grands génies de l'histoire.",
      image: "/images/florence/freepik__renaissance-florence-quattrocento-warm-golden-suns__75484.png",
      color: "from-orange-500 to-red-500",
    },
    cretace: {
      name: "Crétacé -65M",
      description:
        "L'aventure préhistorique vous attend ! Votre esprit aventureux et votre amour de la nature font de vous l'explorateur parfait pour le Crétacé. Préparez-vous à vivre une expérience unique au milieu des dinosaures et d'une nature sauvage comme vous n'en avez jamais vu.",
      image: "/images/cretace/DINO2.png",
      color: "from-green-500 to-teal-500",
    },
  };

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const scores = { paris: 0, florence: 0, cretace: 0 };

    finalAnswers.forEach((answer) => {
      scores.paris += answer.weight.paris;
      scores.florence += answer.weight.florence;
      scores.cretace += answer.weight.cretace;
    });

    const winner = Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));
    setResult(destinations[winner]);
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-6"
        onClick={onClose}>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gradient-to-br from-gray-900 to-black rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto scrollbar-hide p-4 sm:p-8 md:p-12 border border-gold-500/20"
          onClick={(e) => e.stopPropagation()}>
          {!result ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-8 h-8 text-gold-500" />
                  <h2 className="text-3xl font-serif font-bold">
                    Recommandation <span className="text-gradient">personnalisée</span>
                  </h2>
                </div>
                <button onClick={onClose} className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Barre de progression */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>
                    Question {currentQuestion + 1} sur {questions.length}
                  </span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} className="h-full bg-gradient-to-r from-gold-500 to-yellow-400" />
                </div>
              </div>

              <motion.div key={currentQuestion} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                <h3 className="text-2xl font-bold mb-6">{questions[currentQuestion].question}</h3>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleAnswer(option)}
                      className="w-full glass-effect p-5 rounded-xl text-left hover:bg-white/10 transition-all group flex items-center justify-between">
                      <span className="text-lg">{option.text}</span>
                      <ArrowRight className="w-5 h-5 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <Sparkles className="w-10 h-10 sm:w-16 sm:h-16 text-gold-500 mx-auto mb-2 sm:mb-4" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-2 sm:mb-3">Votre destination idéale :</h2>
              <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6 bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>{result.name}</h3>

              <div className="mb-3 sm:mb-6 rounded-2xl overflow-hidden">
                <img src={result.image} alt={result.name} className="w-full h-28 sm:h-56 object-cover" />
              </div>

              <p className="text-xs sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">{result.description}</p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <button
                  onClick={() => {
                    onClose();
                    document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex-1 bg-gradient-to-r from-gold-500 to-yellow-400 text-black py-3 sm:py-4 rounded-full font-bold hover:scale-[1.02] transition-transform">
                  Réserver maintenant
                </button>
                <button onClick={reset} className="flex-1 glass-effect py-3 sm:py-4 rounded-full font-bold hover:bg-white/10 transition">
                  Recommencer
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
