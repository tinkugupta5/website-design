import React from 'react'
import './Featured.css'
import BTC from '../assets/btc-img.png'
import {FiArrowUpRight,FiArrowDown} from 'react-icons/'


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
            <div className="top">
            <img src={BTC} alt=''/>
            </div>
            <div>
              <h5>Bitcoin</h5>
              <p>$49,000</p>
            </div>
            <span><FiArrowUpRight/>2.5%</span>
        </div>



      </div>
    </div>
  )
}

export default Featured
