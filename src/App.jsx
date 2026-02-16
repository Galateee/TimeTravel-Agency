import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Quiz from "./components/Quiz";
import Reservation from "./components/Reservation";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";

function App() {
  const [showChat, setShowChat] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Destinations />
      <Quiz show={showQuiz} onClose={() => setShowQuiz(false)} />
      <Reservation />
      <Footer />
      <ChatBot show={showChat} onToggle={() => setShowChat(!showChat)} />

      {/* Bouton Quiz flottant */}
      <button
        onClick={() => setShowQuiz(true)}
        className="fixed left-4 sm:left-6 bottom-4 sm:bottom-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-40">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </button>
    </div>
  );
}

export default App;
