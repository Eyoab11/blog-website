import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Left Section - About */}
          <div className="flex-1 max-w-md">
            <h2 className="text-2xl font-bold mb-6">Eyoab Amare</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A personal blog and magazine sharing stories, insights, and inspiration. Join me on this journey of discovery and learning.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://instagram.com/e.y.o.a.b_11/" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/eyoabamare/" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/Eyoab11/" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a href="https://t.me/Eyoab11" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9.04 16.44l-.39 3.67c.56 0 .8-.24 1.09-.53l2.62-2.49 5.44 3.98c1 .55 1.72.26 1.97-.92l3.58-16.84c.36-1.66-.6-2.32-1.62-1.92L2.2 9.13c-1.62.65-1.6 1.58-.28 2.01l4.6 1.44 10.7-6.74c.5-.32.96-.14.58.18"/></svg>
              </a>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="flex-1 max-w-xs">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Section - Newsletter */}
          <div className="flex-1 max-w-md">
            <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to my newsletter for the latest updates and insights.</p>
            <form className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-l focus:outline-none focus:border-gray-500"
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-r hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400">No spam ever. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Eyoab Amare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;