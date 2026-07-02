import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import '../styles/Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const [showModal, setShowModal] = useState(false);

  const totalPlants = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🍃</div>
          <p>Your garden is currently empty.</p>
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Explore Our Plants
          </button>
        </div>
      ) : (
        <div className="cart-content-layout">
          <div className="cart-items-section">
            <h2>Selected Plants ({totalPlants})</h2>
            <div className="cart-items-list">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="cart-summary-card">
            <h2>Order Summary</h2>
            <div className="summary-details">
              <div className="summary-row">
                <span>Total Items:</span>
                <span>{totalPlants} {totalPlants === 1 ? 'plant' : 'plants'}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span className="free-shipping">FREE</span>
              </div>
              <div className="summary-row grand-total">
                <span>Total Amount:</span>
                <span>${totalAmount}</span>
              </div>
            </div>
            <div className="cart-actions">
              <button className="continue-shopping-btn" onClick={handleContinueShopping}>
                Continue Shopping
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout Order
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="checkout-modal-overlay">
          <div className="checkout-modal">
            <div className="modal-icon">🎉</div>
            <h2>Thank You for Your Order!</h2>
            <p>Your order for {totalPlants} {totalPlants === 1 ? 'plant' : 'plants'} has been placed successfully.</p>
            <p className="modal-subtext">We are preparing your green companions for shipment. A confirmation email has been sent!</p>
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>
              Awesome
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
