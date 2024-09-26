import React from 'react'

function FullCart({ item, removeFromCart }) {


    // console.log(item)
  return (
    <>
        <div className="full-cart">
            <div className="cart-card">
                <section>
                    <h3>{item.item.name}</h3>
                    <div>
                        <h4>{item.quantity}x</h4>
                        <h5>@ ${item.item.price.toFixed(2)}</h5>
                        <h6>${(item.quantity * item.item.price).toFixed(2)}</h6>
                    </div>
                </section>
                <img onClick={() => removeFromCart(item.item)} src="/icon-remove-item.svg" alt="cancel" />
            </div>
            {/* <div className="order-total">
                <p>Order Total</p>
                <h5>$46.50</h5>
            </div>
            <div className="carbon-neutral">
                <h5>
                    <img src="/icon-carbon-neutral.svg" alt="carbon neutral icon" />
                    This is a &nbsp;<span>carbon-neutral</span>&nbsp; delivery
                </h5>
            </div>
            <button>Confirm Order</button> */}
        </div>
    </>
  )
}

export default FullCart;
