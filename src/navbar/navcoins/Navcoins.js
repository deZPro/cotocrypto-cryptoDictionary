import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Navcoins.css';

function Navcoins() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=2&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data);
                console.log(res.data)
            }).catch(error => console.log(error));
    }, []);
    return (
        <ul>
            {coins.map((item, index) => (
                <li key={index}>
                    <img src={item.image} />
                    <span>{item.name} </span>
                    <span>{item.current_price.toFixed(2)} PLN</span>
                </li>
            ))}
        </ul>
    )
}

export default Navcoins
