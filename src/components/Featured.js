import React,{useState,useEffect} from 'react'
import './Featured.css'
import BTC from '../assets/btc-img.png'
import {FiArrowUpRight,FiArrowDown} from 'react-icons/fi'
import axios from 'axios'


const Featured = () => {
  const [data,setData] = useState(null)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    axios.get(url)
    .then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.log(error)
    })
    
  },[])

  console.log(data)

  if(!data) return null

  // 49:24
  

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
