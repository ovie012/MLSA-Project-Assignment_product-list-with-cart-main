import { useState, useEffect } from 'react';
import './App.css';
import data from '/data.json'
import Dessert from './components/Dessert';
import Cart from './components/Cart';
import OrderConfirmed from './components/OrderConfirmed';
import PreLoader from './components/PreLoader';

function App() {
  const initialCount = Array(data.length).fill(0);
  const [count, setCount] = useState(initialCount);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(false);
  const [loader, setLoader] = useState(false);
  const [fadeAway, setFadeAway] = useState(false);
  const totalPrice = cart.reduce((total, item) => total + (item.item.price * item.quantity), 0).toFixed(2);

  const addToCart = (item, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.item.name === item.name);

      if(existingItem) {
        return prevCart.map(cartItem => 
          cartItem.item.name === item.name
            ? {...cartItem, quantity : cartItem.quantity + quantity}
            : cartItem
        );
      } else {
        return [...prevCart, {item, quantity}];
      }

    });
  };

  const removeFromCart = (item) => {
    setCart(prevCart => prevCart.filter(cartItem => cartItem.item.name !== item.name));

    const index = data.findIndex(dessert => dessert.name === item.name);

    if (index !== -1) {
      setCount(prevCounts => prevCounts.map((count, i) => (i === index ? 0 : count)));
    }
  };

  const handleNewOrder = () => {
    setCart([]);
    setOrder(false);
    setCount(initialCount);
  };

  useEffect(() => {
    setLoader(true);

    setTimeout(() => {
      setFadeAway(true);
    }, 4500)

    setTimeout(() => {
      setLoader(false);
    }, 5000)
  }, [])

  const loading = () => {
    setFadeAway(false);
    setLoader(true);

    setTimeout(() => {
      setFadeAway(true);
    }, 1500)

    setTimeout(() => {
      setLoader(false);
    }, 2000)
  }

  
  return (
    <>
      <main>
        {loader && <PreLoader fadeAway={fadeAway} />}
        <Dessert addToCart={addToCart} removeFromCart={removeFromCart} count={count} setCount={setCount} />
        <Cart setOrder={setOrder} cart={cart} removeFromCart={removeFromCart} totalPrice={totalPrice} />
        {order && <OrderConfirmed loading={loading} handleNewOrder={handleNewOrder} cart={cart} totalPrice={totalPrice} />}
      </main>
    </>
  )
}

export default App
