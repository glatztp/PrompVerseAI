import Navbar from "./components/navbar";
import Particles from "./components/ui/particles";
import SplitText from "./components/ui/splitText";
import { useTheme } from "./components/themeContext";
import { MagicWand } from "phosphor-react";

export default function App() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden relative transition-colors duration-300
        ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <Navbar />

      <main className="relative w-full h-[800px] max-w-7xl mx-auto px-6 flex items-center justify-center">
        <Particles
          particleColors={isDark ? ["#ffffff"] : ["#00000033", "#1a1a1a44"]}
          particleBaseSize={isDark ? 100 : 80}
        />

        {/* Glow */}
        <div
          aria-hidden="true"
          className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[1000px] h-[900px] rounded-full pointer-events-none opacity-60 blur-[100px] z-0"
          style={{
            background: isDark
              ? "radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0) 100%)"
              : "radial-gradient(ellipse at center, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.02) 40%, rgba(0,0,0,0) 100%)",
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-6 max-w-3xl mx-auto">
          <p
            className={`text-sm tracking-wide select-none transition-colors duration-300 ${isDark ? "text-neutral-300" : "text-neutral-500"
              }`}
          >
            Promptverse AI
          </p>

          <SplitText
            text={`Find Inspiration.\nCreate, Generate,\nProduce & Automate.`}
            className="text-4xl sm:text-5xl font-bold leading-tight whitespace-pre-line"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <p
            className={`text-sm max-w-lg transition-colors duration-300 ${isDark ? "text-neutral-400" : "text-neutral-500"
              }`}
          >
            Welcome to PromptVerse. Effortlessly create content, explore endless prompts, and stay
            ahead with real-time trends.
          </p>

          <div className="relative flex flex-wrap justify-center gap-4">
            <button
              className={`flex px-6 py-2 border rounded-3xl relative z-10 transition-colors duration-300
                ${isDark
                  ? "border-white bg-trasnparnt text-white hover:bg-neutral-300 hover:text-black"
                  : "border-black bg-transparent text-black hover:bg-black hover:text-white"
                }`}
            >
              Start Generating <MagicWand className="mt-1.5 ml-4" />
            </button>

            <button
              className={`px-6 py-2 rounded-3xl relative z-10 transition-colors duration-300
                ${isDark
                  ? "bg-white text-black hover:bg-gray-300"
                  : "bg-black text-white hover:bg-black/70"
                }`}
            >
              Download
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
