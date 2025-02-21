import learning from "../assets/learning.svg";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 border-2 border-green-200 md:px-12 h-screen bg-white-smoke overflow-hidden">
      <div className="md:w-1/2">
        <h1 className="text-2xl text-3xl md:text-5xl font-bold text-japanese-laurel">
          Master any subject with fun flashcards!
        </h1>
        <p className="mt-4 text-lg md:text-xl text-night-rider">
          Track your progress, earn XP, and maintain a progress streak!
        </p>
        <button
          onClick={() => navigate("login")}
          className="mt-4 md:mt-6 px-4 md:px-6 py-3 bg-japanese-laurel text-white-smoke hover:text-night-rider text-md md:text-lg font-semibold rounded-lg shadow-md hover:bg-gossip transition-all cursor-pointer"
        >
          Start Studying
        </button>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={learning}
          alt="Learning illustration"
          className="w-2/3 sm:w-1/2 md:w-full max-w-xs sm:max-w-md md:max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
