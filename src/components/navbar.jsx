import { useState, useEffect } from 'react';
import { FaGlasses, FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close menu on scroll or click outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleScroll = () => setMenuOpen(false);
    const handleClick = (e) => {
      if (e.target.closest('.mobile-menu, .md\\:hidden')) return;
      setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClick);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClick);
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center pointer-events-none">
      <div className="flex items-center justify-center bg-gray-50 border-2 border-[#e2d8c3] rounded-full shadow-lg px-8 py-3 gap-8 pointer-events-auto max-w-3xl w-full md:w-auto">
        {/* Logo */}
        <span className="flex items-center text-black text-2xl font-extrabold tracking-widest mr-2" style={{ fontFamily: 'EB Garamond, serif' }}>
          <span className="w-9 h-9 bg-black rounded-full flex items-center justify-center mr-2"><FaGlasses className="text-white text-lg" /></span>Eyoab
        </span>
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#" className="text-gray-800 text-base uppercase font-bold tracking-widest font-serif hover:text-[#b59b6a] transition-colors" style={{ fontFamily: 'Merriweather, serif' }}>Home</a>
          <a href="#" className="text-gray-800 text-base uppercase font-bold tracking-widest font-serif hover:text-[#b59b6a] transition-colors" style={{ fontFamily: 'Merriweather, serif' }}>Categories</a>
          <a href="#" className="text-gray-800 text-base uppercase font-bold tracking-widest font-serif hover:text-[#b59b6a] transition-colors" style={{ fontFamily: 'Merriweather, serif' }}>Contact</a>
        </div>
        <button className="hidden md:block ml-4 bg-[#b59b6a] text-white px-5 py-2 rounded-full uppercase font-bold tracking-widest border-2 border-black hover:bg-black hover:text-[#b59b6a] transition-colors font-serif text-base" style={{ fontFamily: 'Merriweather, serif' }}>Subscribe</button>
        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden text-gray-800 text-2xl ml-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu fixed inset-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center">
          <button className="absolute top-6 right-8 text-gray-800 text-3xl" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <FaTimes />
          </button>
          <nav className="flex flex-col gap-12 items-center w-full">
            <a href="#" className="text-3xl font-extrabold uppercase tracking-widest text-[#222] hover:text-[#b59b6a] transition-colors" style={{ fontFamily: 'EB Garamond, serif' }} onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#" className="text-3xl font-extrabold uppercase tracking-widest text-[#222] hover:text-[#b59b6a] transition-colors" style={{ fontFamily: 'EB Garamond, serif' }} onClick={() => setMenuOpen(false)}>Categories</a>
            <a href="#" className="text-3xl font-extrabold uppercase tracking-widest text-[#222] hover:text-[#b59b6a] transition-colors" style={{ fontFamily: 'EB Garamond, serif' }} onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default NavBar;