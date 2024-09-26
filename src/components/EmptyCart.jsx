import React from 'react'

function EmptyCart() {
  return (
    <>
        <div className="empty-cart">
            <img src="/illustration-empty-cart.svg" alt="empty cart illustration" />
            <p>Your added items will appear here</p>
        </div>
    </>
  )
}

export default EmptyCart;