import { FaGlasses } from 'react-icons/fa';

const NavBar = ({ darkMode }) => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className={`flex items-center ${darkMode ? ' bg-white/90 text-black' : 'bg-black/90 text-white'} backdrop-blur-sm rounded-full shadow-sm px-8 py-3 gap-8 border ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        {/* Logo with glasses */}
        <div className="flex items-center group">
          <div className="relative group-hover:scale-105 transition-transform duration-200">
            <div className={`w-10 h-10 ${darkMode ? 'bg-black' : 'bg-white'} rounded-full flex items-center justify-center`}>
              <FaGlasses className={`${darkMode ? 'text-white' : 'text-black'} text-base group-hover:opacity-90`} />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">
          <a href="#" className={`hover:scale-105 hover:font-semibold transition-all duration-200 text-base`}>
            Home
          </a>
          <a href="#" className={`hover:scale-105 hover:font-semibold transition-all duration-200 text-base`}>
            Categories
          </a>
          <a href="#" className={`hover:scale-105 hover:font-semibold transition-all duration-200 text-base`}>
            Contact
          </a>
        </div>

        {/* Subscribe Button */}
        <button className={`hidden md:block ${darkMode ? ' bg-black text-white' : 'bg-white text-black '} hover:scale-105 hover:font-semibold px-4 py-2 rounded-full text-base font-medium transition-all duration-200`}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NavBar;