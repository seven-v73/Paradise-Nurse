import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './App.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const parseCost = (costString) => {
    return parseFloat(costString.replace('$', '')) || 0;
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      return total + parseCost(item.cost) * item.quantity;
    }, 0).toFixed(2);
  };

  const calculateTotalCost = (item) => {
    return (parseCost(item.cost) * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = () => {
    alert('Coming Soon! Thank you for choosing Paradise Nursery.');
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header">Your Shopping Cart</h2>
      <div className="total-amount">
        Total Cart Amount: ${calculateTotalAmount()}
      </div>

      {cart.length === 0 ? (
        <p style={{ textAlign: 'center', margin: '30px 0' }}>
          Your shopping cart is currently empty.
        </p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">Unit Price: {item.cost}</div>
              <div className="cart-item-subtotal">
                Subtotal: ${calculateTotalCost(item)}
              </div>
            </div>
            <div className="quantity-controls">
              <button className="quantity-btn" onClick={() => handleDecrement(item)}>-</button>
              <span>{item.quantity}</span>
              <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
              <button className="delete-btn" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))
      )}

      <div className="cart-actions">
        <button className="continue-btn" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <button className="checkout-btn" onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;