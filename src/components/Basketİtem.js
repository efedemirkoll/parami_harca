import React from 'react'

function Basketİtem({item, product}) {
  return (
    <div>
        {product.title} x {item.amount}
    </div>
  )
}

export default Basketİtem