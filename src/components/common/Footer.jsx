import { FaGlasses } from 'react-icons/fa';
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaMedium } from 'react-icons/fa';

export const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <div className={`w-10 h-10 ${darkMode ? 'bg-white' : 'bg-black'} rounded-full flex items-center justify-center mr-3`}>
                <FaGlasses className={`${darkMode ? 'text-black' : 'text-white'} text-base`} />
              </div>
              <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>WisdomOfCode</span>
            </div>
            <p className={`mt-4 max-w-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Exploring the intersection of technology, philosophy, and design.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Explore</h4>
              <ul className="space-y-2">
                {['Home', 'Articles', 'Categories', 'About'].map((item) => (
                  <li key={item}>
                    <a href="#" className={`hover:underline ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Categories</h4>
              <ul className="space-y-2">
                {['React', 'JavaScript', 'Philosophy', 'Design'].map((category) => (
                  <li key={category}>
                    <a href="#" className={`hover:underline ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Connect</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <FiTwitter />, name: 'Twitter' },
                  { icon: <FiGithub />, name: 'GitHub' },
                  { icon: <FiLinkedin />, name: 'LinkedIn' },
                  { icon: <FaMedium />, name: 'Medium' }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href="#"
                    className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 text-gray-900'} shadow-sm`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className={`border-t mt-12 pt-8 text-center ${darkMode ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
          <p>© {new Date().getFullYear()} Wisdom of Code. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};