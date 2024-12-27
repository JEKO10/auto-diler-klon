import { useTheme } from "../contexts/ThemeProvider";
import { PiMoonLight, PiSunLight } from "react-icons/pi";

const ToggleTheme = ({ isSmall, toggleNav }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={() => {
        toggleTheme();
        toggleNav();
      }}
      className={`${
        isSmall ? "absolute top-6" : "static hidden"
      } text-3xl lg:text-4xl text-white md:text-text md:block z-30 transition hover:text-red-500`}
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
