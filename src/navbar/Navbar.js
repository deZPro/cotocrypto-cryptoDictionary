import React from 'react'
import './Navbar.css';
import Navcoins from './navcoins/Navcoins';
import Navlogo from './navlogo/Navlogo';

function Navbar() {
    return (
        <div className="navbar">
            <Navlogo />
            <Navcoins />
        </div>    
    )
}

export default Navbar
