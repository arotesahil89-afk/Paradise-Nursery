import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Header.css';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">Paradise Nursery</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Plants</Link>
          </li>
          <li>
            <Link to="/cart" className="cart-link">
              🛒 Cart ({totalQuantity})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
