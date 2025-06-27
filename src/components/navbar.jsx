import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <header>
      <div className="site-header">
        <Link to="/" className="site-logo">
          Eyoab Amare's
        </Link>
        <p className="text-sm mt-2 text-gray-600">PERSONAL BLOG & MAGAZINE</p>
      </div>
      <nav className="main-nav relative">
        <div className="container">
          {/* Navigation Links */}
          <ul className="nav-list flex">
            <li>
              <Link
                to="/"
                className={`nav-link${location.pathname === '/' ? ' font-bold' : ''}`}
                style={location.pathname === '/' ? { color: '#0E79B2', fontWeight: 700 } : {}}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className={`nav-link${location.pathname === '/categories' ? ' font-bold' : ''}`}
                style={location.pathname === '/categories' ? { color: '#0E79B2', fontWeight: 700 } : {}}
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link${location.pathname === '/contact' ? ' font-bold' : ''}`}
                style={location.pathname === '/contact' ? { color: '#0E79B2', fontWeight: 700 } : {}}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;