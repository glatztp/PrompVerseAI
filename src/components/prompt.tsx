import { ArrowUpRight } from "phosphor-react";
import SplitText from "./ui/splitText";
import { useTheme } from "./themeContext";
import { motion } from "framer-motion";

const prompts = [
  "https://zeltalabs.com/",
  "https://promptverse.ai/",
  "https://midjourney.com/",
  "https://chat.openai.com/",
  "https://notion.so/",
  "https://github.com/",
  "https://huggingface.co/",
];

function PromptCard({ url }: { url: string }) {
  return (
    <motion.div
      className="relative shrink-0 w-96 py-4 m-2 px-4 bg-zinc-900 flex flex-col justify-between cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Frame branco animado */}
      <motion.div
        className="pointer-events-none absolute inset-0 border border-white opacity-0 rounded-none"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          boxShadow: "0 0 12px 2px rgba(255,255,255,0.7)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <p className="text-md font-medium text-neutral-400 mb-2 flex items-center gap-1 relative z-10">
        Write an attractive hero title for this website{" "}
        <ArrowUpRight size={16} />
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline underline-offset-4 break-words flex items-center gap-2 text-left relative z-10"
      >
        {url}
        <ArrowUpRight weight="bold" size={18} />
      </a>
    </motion.div>
  );
}

export default function Prompt() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const repeatCount = 3;

  return (
    <div
      className={`min-h-screen px-0 py-20 transition-colors duration-300 custom-scrollbar ${
        isDark ? "dark bg-black text-white" : "light bg-white text-black"
      }`}
    >
      <div className="w-full flex flex-col items-center space-y-12 px-6">
        <SplitText
          text={`Create more with PromptVerse`}
          className="text-4xl sm:text-5xl leading-tight whitespace-pre-line"
          delay={80}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />

        <p
          className={`text-center sm:text-lg max-w-2xl transition-colors duration-300 md:text-xs ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          Discover endless creativity with PromptVerse. Generate diverse content
          effortlessly using prompts. Stay updated with real-time trends,
          automate tasks, and extract insights from any document or URL. All
          within a sleek, futuristic design. Create more, effortlessly.
        </p>

        {/* Animação geral no container */}
        <motion.div
          className="w-full space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {[0, 1, 2].map((rowIndex) => {
            const directionClass =
              rowIndex === 1 ? "animate-scroll-right" : "animate-scroll-left";

            return (
              <div
                key={rowIndex}
                className="overflow-hidden w-screen whitespace-nowrap"
              >
                <div
                  className={`flex ${directionClass}`}
                  style={{
                    width: `${repeatCount * 100}%`,
                  }}
                >
                  {Array.from({ length: repeatCount }).map((_, repeatIndex) =>
                    prompts.map((url, index) => (
                      <PromptCard
                        key={`${rowIndex}-${repeatIndex}-${index}`}
                        url={url}
                      />
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
