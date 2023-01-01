import React from 'react'
import './Featured.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='container'>
        {/* left side */}
        <div className="left">
            <h2>Explore top Crypto Like Bitcoin ,EDogecoin</h2>
            <p>See all available assets:Cryptocurrencies and NFT'S</p>
            <button className='btn'>See More Coins</button>
        </div>

        {/* right */}

        <div className='right'>
            <dic className="top">
            <img src={BTC} alt=''/>
            </dic>
        </div>



      </div>
    </div>
  )
}

export default Featured
