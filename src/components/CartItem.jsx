import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, deleteItem } from '../redux/CartSlice';
import '../styles/CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };

  const totalPrice = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item-card">
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
            onClick={handleDecrease}
            disabled={item.quantity <= 1}
          >
            −
          </button>
          <span className="qty-number">{item.quantity}</span>
          <button className="qty-control-btn plus" onClick={handleIncrease}>
            +
          </button>
        </div>
        <button className="cart-item-remove-btn" onClick={handleDelete} title="Remove item">
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
};

export default CartItem;
