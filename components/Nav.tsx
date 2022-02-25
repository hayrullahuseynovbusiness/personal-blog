import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useTheme } from "components/ThemeProvider";
const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="py-2 flex justify-end items-center">
      <button onClick={toggleTheme} className="p-2 rounded-lg">
        {theme === "dark" && <SunIcon className="w-5 h-5 text-white" />}
        {theme === "white" && <MoonIcon className="w-5 h-5 text-black" />}
      </button>
    </div>
  );
};

export default Nav;
