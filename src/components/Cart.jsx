import React, { useState } from 'react';
import FullCart from './FullCart';
import EmptyCart from './EmptyCart';
import PreLoader from './PreLoader';

function Cart({ cart, removeFromCart, totalPrice, setOrder }) {
  const cartAmount = cart.reduce((total, item) => total + item.quantity, 0);

  // console.log(totalPrice)

  return (
    <>
      <div className="cart">
        <h2>Your Cart ({cartAmount})</h2>
        {cart.length > 0 ? (
          <>
        {cart.map((item, index) => (
          <FullCart key={index} item={item} removeFromCart={removeFromCart} />
        ))}
        
            <div className="order-total">
                <p>Order Total</p>
                <h5>${totalPrice}</h5>
            </div>
            <div className="carbon-neutral">
                <h5>
                    <img src="/icon-carbon-neutral.svg" alt="carbon neutral icon" />
                    This is a &nbsp;<span>carbon-neutral</span>&nbsp; delivery
                </h5>
            </div>
            <button onClick={() => setOrder(true)} className='full-cart'>Confirm Order</button>
          </>
      ) : (
        <EmptyCart />
      )}
      </div>
    </>
  )
}

export default Cart