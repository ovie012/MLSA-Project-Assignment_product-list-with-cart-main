import React, { useState } from 'react'
import data from '/data.json'

function Dessert({ addToCart, removeFromCart, count, setCount }) {
  // const initialCount = Array(data.length).fill(0);
  // const [count, setCount] = useState(initialCount);

  const handleAddToCart = (index) => {
    const selectedItem = data[index];
    addToCart(selectedItem, 1);
    setCount(prevCounts => 
      prevCounts.map((count, i) => (i === index ? 1 : count))
    )
    // console.log(count[index], index)
  };

  const handleIncrement = (index) => {
    setCount(prevCounts =>
      prevCounts.map((count, i) => (i === index ? count + 1 : count))
    )
    addToCart(data[index], + 1)
    // console.log(count[index], index, data[index])
  };

  const handleDecrement = (index) => {
    if (count[index] > 1){
      setCount(prevCounts =>
        prevCounts.map((count, i) => (i === index ? count - 1 : count))
      )
      addToCart(data[index], - 1)
    } else if (count[index] === 1) {
      removeFromCart(data[index]);
      setCount(prevCounts => 
        prevCounts.map((count, i) => (i === index ? 0 : count))
      );
    }
    // console.log(count[index], index, data[index])
  };


  return (
    <div className='dessert'>
      <h2>Desserts</h2>
      <div className='dessert-container'>
        {data.map((item, index) => (
          <section key={index}>
            <img className={`background-img desktop ${count[index] > 0 ? 'active' : ''}`} src={item.image.desktop} alt="cover" />
            <img className={`background-img tablet ${count[index] > 0 ? 'active' : ''}`} src={item.image.tablet} alt="cover" />
            <img className={`background-img mobile ${count[index] > 0 ? 'active' : ''}`} src={item.image.mobile} alt="cover" />
            {count[index] < 1 ? ( 
              <button onClick={() => handleAddToCart(index)} >
                <img className='cart-icon' src='/icon-add-to-cart.svg' alt='cart' />
                Add to cart
              </button>
            ) : (
              // <button className='increment'>
              //   <img onClick={() => handleDecrement(index)} src="/icon-decrement-quantity.svg" alt="minus" />
              //   {count[index]}
              //   <img onClick={() => handleIncrement(index)} src="/icon-increment-quantity.svg" alt="plus" />
              // </button>
              <button className='increment'>
                <svg onClick={() => handleDecrement(index)}  xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
                  <path d="M0 .375h10v1.25H0V.375Z" />
                </svg>
                {count[index]}
                <svg onClick={() => handleIncrement(index)} width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                </svg>
              </button>
            )}
            <p>{item.category}</p>
            <h6>{item.name}</h6>
            <h5>${item.price.toFixed(2)}</h5>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Dessert;