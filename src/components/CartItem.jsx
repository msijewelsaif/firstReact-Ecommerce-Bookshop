import React from 'react';

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <h4>{item.title}</h4>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${item.quantity * item.price}</p>
    </div>
  );
}

export default CartItem;
