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
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
        <p className="cart-item-quantity">Quantity: {item.quantity}</p>
        <p className="cart-item-total">Total: ${totalPrice}</p>
      </div>
      <div className="cart-item-actions">
        <button className="quantity-btn" onClick={handleDecrease}>
          −
        </button>
        <button className="quantity-btn" onClick={handleIncrease}>
          +
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;

