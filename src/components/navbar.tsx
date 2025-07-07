'use client';

import { Sparkle, Moon, Sun } from 'phosphor-react';
import { Button } from "./ui/button";
import { useTheme } from './themeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme(); 
  const isDark = theme === "dark";


  return (
    <nav
      aria-label="Main Navigation"
      className="bg-white dark:bg-black text-black dark:text-white px-6 sm:px-10 lg:px-20 py-4 flex flex-wrap items-center justify-between border-b border-black/40 dark:border-neutral-200/20 gap-y-6 transition-colors duration-300 relative"
    >
      <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base order-2 sm:order-1 w-full sm:w-auto justify-center sm:justify-start">
        <li><a href="#about" className="hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors">About</a></li>
        <li><a href="#tecnologies" className="hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors">Technologies</a></li>
        <li><a href="/products" className="hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors">Products</a></li>
        <li><a href="#discover" className="hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors">Discover</a></li>
      </ul>

      <div className="flex items-center gap-3 order-1 sm:order-2 w-full sm:w-auto justify-center">
        <a href="/" className="bg-black dark:bg-white rounded-full h-12 w-12 flex items-center justify-center shrink-0 transition-colors">
          <Sparkle weight="fill" className="text-white dark:text-black w-6 h-6 sm:w-7 sm:h-7" />
        </a>
        <a href="/" className="font-semibold text-xl sm:text-2xl whitespace-nowrap">
          PromptVerse AI
        </a>
      </div>

      <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base order-3 w-full sm:w-auto justify-center sm:justify-end relative">
        <li><a href="/team" className="hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors">Team</a></li>
        <li><a href="/pricing" className="hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors">Pricing</a></li>
        <li><a href="/buy-premium" className="hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors">Buy Premium</a></li>
        <li>
          <Button className="rounded-3xl py-3 px-6 bg-black dark:bg-white text-white dark:text-black font-bold text-md hover:bg-neutral-800 dark:hover:bg-neutral-300 transition-colors">
            Get Started
          </Button>
        </li>
        <li>
          <button
            onClick={toggleTheme}
            className="  bg-black dark:bg-white p-2 rounded-full text-white dark:text-black hover:scale-105 transition"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun weight="fill" size={20} /> : <Moon weight="fill" size={20} />}
          </button>
        </li>
      </ul>
    </nav>
  );
}
