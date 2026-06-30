import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import '../styles/Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);

  const totalPlants = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-summary">
            <div className="summary-item">
              <span className="summary-label">Total Plants:</span>
              <span className="summary-value">{totalPlants}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Total Amount:</span>
              <span className="summary-value">${totalAmount}</span>
            </div>
          </div>

          <div className="cart-items-section">
            <h2>Items in Cart</h2>
            <div className="cart-items-list">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="cart-actions">
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
