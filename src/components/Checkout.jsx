import React, { useState } from 'react';
import { render } from 'react-dom';

const Checkout = () => {
  const [order, setOrder] = useState(null);

  const handleCheckout = async () => {
    try {
      const checkout = await customCheckoutSDK.createCheckout();
      setOrder(checkout.order);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Custom Checkout</h2>
      {order ? (
        <div>
          <h3>Order ID: {order.id}</h3>
          <p>Subtotal: {order.subtotal}</p>
          <p>Total: {order.total}</p>
        </div>
      ) : (
        <button onClick={handleCheckout}>Checkout</button>
      )}
    </div>
  );
};

render(<Checkout />, document.getElementById('root'));
