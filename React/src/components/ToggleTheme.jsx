import { useTheme } from "../contexts/ThemeProvider";
import { PiMoonLight, PiSunLight } from "react-icons/pi";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-4xl text-text absolute top-4 right-6 hover:text-background"
    >
      {theme === "dark" ? (
        <PiSunLight strokeWidth={10} />
      ) : (
        <PiMoonLight strokeWidth={10} />
      )}
    </button>
  );
};

export default ToggleTheme;
