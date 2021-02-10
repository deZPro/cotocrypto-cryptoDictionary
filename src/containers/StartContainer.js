import React from 'react'
import './StartContainer.css';
import { Link } from 'react-router-dom';
import BitcoinLogo from '../images/Bitcoin.svg'
import EthereumLogo from '../images/Ethereum.svg'
import MoneroLogo from '../images/Monero.svg'
import LitecoinLogo from '../images/Litecoin.svg'
import DashLogo from '../images/Dash.svg'
import ZcashLogo from '../images/Zcash.svg'
import WavesLogo from '../images/Waves.svg'
import OpenBook from '../images/open-book.svg'
import { motion } from 'framer-motion';

function StartContainer() {
    return (
        <div className="start-container">
            <div className="left">
                <div className="card">
                    <motion.h1
                        initial={{ opacity: 0, y: -200 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    >
                        Witaj
                        </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    >
                        Rozpocznij wyszukiwanie słów powiązanych z tematyką blockchain.
                        </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    >
                        <Link to="/DictionaryContainer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        Rozpocznij</Link>
                    </motion.div>
                </div>
            </div>
            <div className="right">
                <motion.img className="crypto-logo-svg" src={BitcoinLogo}
                    whileHover={{ rotate: 360 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 7 } }}
                />
                <motion.img className="crypto-logo-svg" src={EthereumLogo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 6 } }}
                />
                <motion.img className="crypto-logo-svg" src={MoneroLogo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 5 } }}
                />
                <motion.img className="crypto-logo-svg" src={LitecoinLogo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 4 } }}
                />
                <motion.img className="crypto-logo-svg" src={DashLogo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 3 } }}
                />
                <motion.img className="crypto-logo-svg" src={ZcashLogo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 2 } }}
                />
                <motion.img className="crypto-logo-svg" src={WavesLogo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                />
                <motion.img className="crypto-logo-svg book" src={OpenBook}
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0, transition: { type: 'spring' } }}

                />
            </div>
        </div>
    )
}

export default StartContainer
