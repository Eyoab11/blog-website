import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="absolute top-6 right-6 p-2 rounded-full focus:outline-none z-50"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <FaSun className="text-yellow-400 text-xl hover:scale-110 transition-transform" />
      ) : (
        <FaMoon className="text-gray-700 text-xl hover:scale-110 transition-transform" />
      )}
    </button>
  );
};