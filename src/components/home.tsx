import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";
import Navbar from "./navbar";
import Particles from "./ui/particles";
import SplitText from "./ui/splitText";
import { useTheme } from "./themeContext";
import { MagicWand } from "phosphor-react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.18,
      when: "beforeChildren",
      ease: easeOut,
      duration: 0.7,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: easeOut, duration: 0.55 },
  },
};

const buttonHoverTap = {
  hover: { scale: 1.07, boxShadow: "0px 0px 10px rgba(0,0,0,0.15)" },
  tap: { scale: 0.95 },
};

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div
      className={`min-h-screen relative transition-colors duration-300 custom-scrollbar ${
        isDark ? "dark bg-black text-white" : "light bg-white text-black"
      }`}
    >
      <Navbar />

      <main className="relative w-full h-[800px] max-w-7xl mx-auto px-6 flex items-center justify-center">
        <Particles
          particleColors={isDark ? ["#ffffff"] : ["#00000033", "#1a1a1a44"]}
          particleBaseSize={isDark ? 100 : 80}
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[1000px] h-[900px] rounded-full pointer-events-none opacity-60 blur-[100px] z-0"
          style={{
            background: isDark
              ? "radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0) 100%)"
              : "radial-gradient(ellipse at center, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.02) 40%, rgba(0,0,0,0) 100%)",
          }}
        />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className={`text-sm tracking-wide select-none transition-colors duration-300 ${
              isDark ? "text-neutral-300" : "text-neutral-500"
            }`}
            aria-label="Promptverse AI"
          >
            Promptverse AI
          </motion.p>

          <motion.div variants={itemVariants}>
            <SplitText
              text={`Find Inspiration.\nCreate, Generate,\nProduce & Automate.`}
              className="text-4xl sm:text-5xl leading-tight whitespace-pre-line"
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
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-sm max-w-lg transition-colors duration-300 ${
              isDark ? "text-neutral-400" : "text-neutral-500"
            }`}
          >
            Welcome to PromptVerse. Effortlessly create content, explore endless prompts, and stay
            ahead with real-time trends.
          </motion.p>

          <motion.div variants={itemVariants} className="relative flex flex-wrap justify-center gap-4">
            <motion.button
              initial={{ backgroundColor: "transparent" }}
              whileHover={{ ...buttonHoverTap.hover, backgroundColor: isDark ? "#e5e5e5" : "#000", color: isDark ? "#000" : "#fff", borderColor: isDark ? "#e5e5e5" : "#000" }}
              whileTap={buttonHoverTap.tap}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`flex px-6 py-2 border rounded-3xl relative z-10 cursor-pointer select-none transition-colors duration-300 ${
                isDark
                  ? "border-white text-white"
                  : "border-black text-black"
              }`}
            >
              Start Generating <MagicWand className="mt-1.5 ml-4" />
            </motion.button>

            <motion.button
              initial={{ backgroundColor: isDark ? "#fff" : "#000", color: isDark ? "#000" : "#fff" }}
              whileHover={{ ...buttonHoverTap.hover, backgroundColor: isDark ? "#d1d1d1" : "#1a1a1a" }}
              whileTap={buttonHoverTap.tap}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="px-6 py-2 rounded-3xl relative z-10 cursor-pointer select-none transition-colors duration-300"
            >
              Download
            </motion.button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
