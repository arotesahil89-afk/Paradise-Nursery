import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Header.css';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className={`header ${isHome ? 'transparent' : ''}`}>
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/" className="brand-logo">
            <span className="brand-icon">🌿</span> Paradise Nursery
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Plants</Link>
          </li>
          <li>
            <Link to="/cart" className={`cart-link ${location.pathname === '/cart' ? 'active' : ''}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cart-svg-icon">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="cart-label">Cart</span>
              {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
