import { useTheme } from "../hooks/useTheme"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-2xl bg-text/10 p-2 rounded-xl transition"
    >
      {theme === "dark" ? <Sun color="white"/>: <Moon color="black"/>}
    </button>
  );
}