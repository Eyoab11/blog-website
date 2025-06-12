import { FaGlasses } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full shadow-sm px-8 py-3 gap-8 border border-gray-100">
        {/* Logo with glasses only (name removed) */}
        <div className="flex items-center">
          <div className="relative">
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
              <FaGlasses className="text-white text-base" />
            </div>
            <span className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              22
            </span>
          </div>
        </div>

        {/* Navigation Links - Full size */}
        <div className="hidden md:flex gap-8">
          <a href="#" className="hover:text-indigo-600 transition-colors text-base">
            Home
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors text-base">
            Tech
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors text-base">
            Blog
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors text-base">
            Contact
          </a>
        </div>

        {/* Subscribe Button - Full size */}
        <button className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-base font-medium transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NavBar;