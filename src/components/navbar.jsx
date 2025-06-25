import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="site-header">
        <Link to="/" className="site-logo">
          Eyoab Amare
        </Link>
        <p className="text-sm mt-2 text-gray-600">PERSONAL BLOG & MAGAZINE</p>
      </div>
      <nav className="main-nav relative">
        <div className="container">
          {/* Mobile menu button */}
          <button 
            className="md:hidden absolute right-4 top-4 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Navigation Links */}
          <ul className={`nav-list ${isMenuOpen ? 'flex' : 'hidden md:flex'}`}>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/categories" className="nav-link">Categories</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;