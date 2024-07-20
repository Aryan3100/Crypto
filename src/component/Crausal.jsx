import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { trending, TrendingCoins } from '../config/api'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import { green, red } from '@mui/material/colors'




const Crausal = () => {
    const [dat, setData] = useState([])

    const fetch = async () => {
        const { data } = await axios.get(TrendingCoins("INR"))
        setData(data);

    }

    useEffect(() => {
        fetch();
    }, [])
    console.log(dat)
   
    const items = dat.map((coin, index) => {
        let profit = coin.price_change_percentage_24h>= 0;
        return (
            <Link to={`/conis/${coin.id}`}  >
                <img src={coin?.image}
                    alt={coin.name}
                    height='80'
                    style={{ marginBottom: 10, }}
                />
                <span style={{textTransform:'uppercase'}}>{coin.symbol}
                    &nbsp;
                <span 
                  style={{color: profit > 0? green[900] : red[900] , fontWeight:'bolder'}}
                >{profit && '+'}{coin?.price_change_percentage_24h.toFixed(2)} </span>
                </span>
                <span style={{ fontSize: 22, fontWeight: 500 }}>
                    {coin?.current_price.toFixed(2)}
                </span>
            </Link>
        )
    })

    const responsive = {
             0: {
                items: 2,
            },
            1024: {
                items: 4,
            }
          
    };

    return (


        <AliceCarousel mouseTracking
           
            infinite
            autoPlayInterval={1000}
            animationDuration={1500} disableDotsControls
            responsive={responsive}
            autoPlay items={items}
            disableButtonsControls
        />


    )
}

export default Crausal