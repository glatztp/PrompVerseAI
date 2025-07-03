import { useEffect } from "react";
import { useTheme } from "./components/themeContext";
import Home from "./components/home";
import Prompt from "./components/prompt";
import Visualization from "./components/visualization";

function App() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    document.body.classList.remove("custom-scrollbar", "light", "dark");

    document.body.classList.add("custom-scrollbar");
    document.body.classList.add(isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="min-h-screen max-h-screen overflow-y-auto overflow-x-hidden custom-scrollbar">
      <Home />
      <Prompt />
      <Visualization />
    </div>
  );
}

export default App;
