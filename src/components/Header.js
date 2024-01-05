import React from 'react'
import { moneyFormat } from '../helpers'
import '../style/header.css';

function Header({ total, money }) {
  return (
    <>
      <div>
        {total > 0 && money - total !== 0 && (
          <div className='header'> Harcayacak <span>{moneyFormat(money - total)}</span> Tl paranız kaldı </div>
        )}
        {total === 0 && (
          <div className='header'>Harcamak için <span>{moneyFormat(money)}</span> Tl paranız var </div>
        )}
        {money - total === 0 && (
          <div className='header'> Paranız bitti malesef alışverişe devam edemessiniz !</div>
        )}
      </div>
    </>
  )
}

export default Header