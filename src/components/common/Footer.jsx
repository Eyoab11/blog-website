import { FaGlasses } from 'react-icons/fa';
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaMedium } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className={`py-12 bg-gray-50`}>
      <div className="container mx-auto px-6" style={{ fontFamily: 'EB Garamond, serif' }}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <div className={`w-10 h-10 bg-black rounded-full flex items-center justify-center mr-3`}>
                <FaGlasses className={`text-white text-base`} />
              </div>
              <span className={`text-xl font-bold text-black`} style={{ fontFamily: 'EB Garamond, serif' }}>Eyoab Gazette</span>
            </div>
            <p className={`mt-4 max-w-xs text-gray-500`}>
              Exploring the intersection of technology, philosophy, and design.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className={`text-lg font-semibold mb-4 text-gray-900`} style={{ fontFamily: 'EB Garamond, serif' }}>Explore</h4>
              <ul className="space-y-2">
                {['Home', 'Articles', 'Categories', 'About'].map((item) => (
                  <li key={item}>
                    <a href="#" className={`hover:text-[#b59b6a] text-gray-600 font-serif transition-colors`} style={{ fontFamily: 'Merriweather, serif' }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={`text-lg font-semibold mb-4 text-gray-900`} style={{ fontFamily: 'EB Garamond, serif' }}>Categories</h4>
              <ul className="space-y-2">
                {['React', 'JavaScript', 'Philosophy', 'Design'].map((category) => (
                  <li key={category}>
                    <a href="#" className={`hover:text-[#b59b6a] text-gray-600 font-serif transition-colors`} style={{ fontFamily: 'Merriweather, serif' }}>
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={`text-lg font-semibold mb-4 text-gray-900`} style={{ fontFamily: 'EB Garamond, serif' }}>Connect</h4>
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
                    className={`p-2 rounded-full bg-white hover:bg-[#b59b6a] text-gray-900 hover:text-white shadow-sm transition-colors`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={`border-t mt-12 pt-8 text-center border-gray-200 text-gray-500`} style={{ fontFamily: 'Merriweather, serif' }}>
          <p>© {new Date().getFullYear()} Eyoab Gazette. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};