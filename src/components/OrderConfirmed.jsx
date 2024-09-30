import React from 'react'

function OrderConfirmed({ cart, totalPrice, handleNewOrder, loading }) {
  return (
    <>
      <div className="order-confirmed">
        <div className="inner-order-confirmed">
          <img src="/icon-order-confirmed.svg" alt="order confirmed" />
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
          <div className='full-order-card'>
            <div className='scroll-card'>
              {cart.map((item, index) => (
                <div key={index} className='order-card'>
                  <div>
                    <img src={item.item.image.thumbnail} alt="thumbnail" />
                    <section>
                        <h3>{item.item.name}</h3>
                        <div>
                            <h4>{item.quantity}x</h4>
                            <h5>@ ${item.item.price.toFixed(2)}</h5>
                        </div>
                    </section>
                  </div>
                <h6>${(item.quantity * item.item.price).toFixed(2)}</h6>
              </div>
              ))}
            </div>
            <div className="order-total">
                <p>Order Total</p>
                <h5>${totalPrice}</h5>
            </div>
          </div>
          <button onClick={() => {handleNewOrder(); loading();}} className='full-cart'>Start New Order</button>
        </div>
      </div>
    </>
  )
}

export default OrderConfirmed