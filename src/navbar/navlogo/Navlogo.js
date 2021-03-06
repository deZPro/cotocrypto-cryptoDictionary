import React from 'react';
import { IconContext } from 'react-icons';
import { GiBlackBook } from 'react-icons/gi';
import './Navlogo.css';
import Logo from './cotocryptologo.png'

function Navlogo() {
    return (
        <>
            <div className="logo-navbar">
                {/* <IconContext.Provider value={{ color: "ff9900", size: '35px' }}>
                    <GiBlackBook />
                </IconContext.Provider> */}
                <img className="logo-photo" src ={Logo} />
                <span className="logo-grey">cotocrypto</span><span className="logo-orange">.pl</span>
            </div>
        </>
    )
}

export default Navlogo
