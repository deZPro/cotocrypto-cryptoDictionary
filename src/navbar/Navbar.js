import React from 'react'
import './Navbar.css';
import Navcoins from './navcoins/Navcoins';
import BookLogo from '../images/booklogo.png'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-navbar">
                <img className="book-logo" src={BookLogo} />
            <span className="logo-grey">cotocrypto</span><span className="logo-orange">.pl</span>
            </div>
            <Navcoins />
        </div>
    )
}

export default Navbar
