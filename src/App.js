import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import products from './products.json'
import Basket from './components/Basket';

function App() {

  const [money, setMoney] = useState(100000000000)
  var [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
  const resetBasket = () => {
    setBasket(basket = [])
  }


  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(products => products.id === item.id).price))
    }, 0))

  }, [basket]);

  return (
    <>
      <Header total={total} money={money} />
      <div className='container products'>
        {products.map(product => {
          return <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
        })}
      </div>
      {
        total > 0 && (
          < Basket resetBasket={resetBasket} products={products} total={total} basket={basket} />
        )
      }

    </>
  );
}

export default App;
