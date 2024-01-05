import React from 'react'
import Basketİtem from './Basketİtem'
import '../style/basket.css';
import { moneyFormat } from '../helpers';


function Basket({ basket, total, products, resetBasket }) {
    return (
        <>
            <div className='basket-container'>

                <h2>Sepetiniz</h2>

                <div className='genel'>
                    
                        {basket.map((item) => (
                            <h4> <Basketİtem item={item} product={products.find(p => p.id === item.id)} /> </h4>
                        ))}
                    
                </div>
                <hr />
                <div className='toplam'>
                   <h4> Toplam: {moneyFormat (total)}TL</h4>
                </div>

                <button className='btn' onClick={resetBasket}>Sepeti Sıfırla</button>

            </div>
        </>
    )
}
export default Basket