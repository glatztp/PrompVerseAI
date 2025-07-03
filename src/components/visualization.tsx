import { MagicWand } from "phosphor-react";
import { useTheme } from "./themeContext";
import ChatImage from "../assets/chat.png";
import GalleryImage from "../assets/glasses(2).png";
import GlassesyImage from "../assets/glasses(1).png";
import { motion } from "framer-motion";

function Visualization() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      className={`flex flex-col items-center mx-auto px-6 py-20 gap-24 transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center max-w-4xl text-center gap-6 py-24"
      >
        <h1 className="text-4xl sm:text-5xl leading-tight">
          See Trending Prompts
        </h1>
        <p
          className={`text-base md:text-sm sm:text-lg leading-relaxed transition-colors duration-300 ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          Discover endless creativity with PromptVerse. Generate diverse content
          effortlessly using prompts. Stay updated with real-time trends,
          automate tasks, and extract insights from any document or URL. All
          within a sleek, futuristic design.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className={`flex items-center px-6 py-2 border rounded-3xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isDark
                ? "border-white text-white hover:bg-neutral-300 hover:text-black focus:ring-white"
                : "border-black text-black hover:bg-black hover:text-white focus:ring-black"
            }`}
          >
            Start Generating <MagicWand className="ml-3 mt-1" weight="bold" />
          </button>
          <button
            className={`px-6 py-2 rounded-3xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isDark
                ? "bg-white text-black hover:bg-gray-300 focus:ring-white"
                : "bg-black text-white hover:bg-black/70 focus:ring-black"
            }`}
          >
            Download
          </button>
        </div>
        <motion.img
          src={ChatImage}
          alt="Chat illustration"
          className="w-full max-w-5xl h-auto object-contain select-none mt-16"
          draggable={false}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center max-w-4xl text-center gap-6 py-24"
      >
        <h1 className="text-4xl sm:text-5xl leading-tight">
          Images like never seen before
        </h1>
        <p
          className={`text-base md:text-sm sm:text-lg leading-relaxed transition-colors duration-300 ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          Discover endless creativity with PromptVerse. Generate diverse content
          effortlessly using prompts. Stay updated with real-time trends,
          automate tasks, and extract insights from any document or URL. All
          within a sleek, futuristic design.
        </p>
        <motion.img
          src={GalleryImage}
          alt="Gallery prompt image"
          className="w-full max-w-5xl h-auto object-contain select-none mt-16"
          draggable={false}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-7xl px-4 py-24"
      >
        <h1 className="text-4xl sm:text-5xl leading-tight text-center">
          Generate audio and music
        </h1>
        <p
          className={`text-base md:text-sm sm:text-lg leading-tight transition-colors duration-300 text-center py-6 ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          Discover endless creativity with PromptVerse. Generate diverse content
          effortlessly using prompts. Stay updated with real-time trends,
          automate tasks, and extract insights from any document or URL. All
          within a sleek, futuristic design.
        </p>
        <div className="bg-zinc-950 flex flex-col lg:flex-row items-center mt-12 lg:items-start justify-between gap-12 p-10 lg:p-16 shadow-xl text-white rounded-2xl">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-4xl sm:text-5xl leading-tight text-white">
              Enhance Your Projects with Ultra-Realistic AI Voices
            </h2>
            <p className="text-neutral-400 text-base md:text-sm sm:text-lg leading-relaxed">
              Create engaging voice content with unique AI voices perfect for
              your audience.
            </p>
            <p className="text-neutral-400 text-base md:text-sm sm:text-lg leading-relaxed">
              Customize voices for narration, branding, or storytelling.
            </p>
            <p className="text-neutral-400 text-base md:text-sm sm:text-lg leading-relaxed">
              Use advanced AI tools to generate music, speech, and more.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <li>
                <button className="px-6 py-2 border rounded-3xl text-white border-white hover:bg-neutral-300 hover:text-black">
                  Train Voice Models
                </button>
              </li>
              <li>
                <button className="px-6 py-2 border rounded-3xl text-white border-white hover:bg-neutral-300 hover:text-black">
                  Text-to-Speech
                </button>
              </li>
              <li>
                <button className="px-6 py-2 border rounded-3xl text-white border-white hover:bg-neutral-300 hover:text-black">
                  AI Voice Generator
                </button>
              </li>
              <li>
                <button className="px-6 py-2 border rounded-3xl text-white border-white hover:bg-neutral-300 hover:text-black">
                  AI Music Production
                </button>
              </li>
              <li>
                <button className="px-6 py-2 border rounded-3xl text-white border-white hover:bg-neutral-300 hover:text-black">
                  AI Composition
                </button>
              </li>
              <li>
                <button className="px-6 py-2 border rounded-3xl text-black bg-white hover:bg-neutral-300 hover:text-black">
                  Generate Now
                </button>
              </li>
            </ul>
          </div>
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={GlassesyImage}
              alt="AI Audio Visual"
              className="w-full max-w-4xl h-auto object-contain select-none mt-10 lg:mt-0"
              draggable={false}
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Visualization;
