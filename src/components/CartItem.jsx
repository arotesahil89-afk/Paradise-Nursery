import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import '../styles/CartItem.css';
import '../styles/Cart.css'; // Load cart-wide container layout styles

const CartItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
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
              {cartItems.map(item => {
                const totalPrice = (item.price * item.quantity).toFixed(2);
                return (
                  <div key={item.name} className="cart-item-card">
                    <div className="cart-item-image-wrapper">
                      <img src={item.image} alt={item.name} className="cart-item-img" />
                    </div>
                    <div className="cart-item-info">
                      <span className="cart-item-category">{item.category}</span>
                      <h3 className="cart-item-title">{item.name}</h3>
                      <div className="cart-item-pricing">
                        <span className="cart-item-unit-price">${item.price.toFixed(2)} each</span>
                        <span className="cart-item-total-price">Total: ${totalPrice}</span>
                      </div>
                    </div>
                    <div className="cart-item-controls">
                      <div className="quantity-selector">
                        <button 
                          className="qty-control-btn minus" 
                          onClick={() => handleDecrement(item)}
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <span className="qty-number">{item.quantity}</span>
                        <button className="qty-control-btn plus" onClick={() => handleIncrement(item)}>
                          +
                        </button>
                      </div>
                      <button className="cart-item-remove-btn" onClick={() => handleRemove(item)} title="Remove item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="trash-icon">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                );
              })}
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

export default CartItem;
