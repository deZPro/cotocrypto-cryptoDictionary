import React, { useState } from 'react'
import './DictionaryContainer.css';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FiPlus } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

function DictionaryContainer() {
    const [searchTerm, setSearchTerm] = useState("");
    const [clicked, setClicked] = useState(false)

    let cryptoData = [
        //A
        { name: "Airdrop", description: "Airdrop to darmowy zrzut kryptowaluty w formie prezentu. Zrzut najczęściej otrzymywany jest z racji posiadania innej kryptowaluty na swoim portfelu lub za wykonanie określonych zadań w mediach społecznościowych." },
        //B
        { name: "Bitcoin (BTC)", description: "Bitcoin (BTC) is a digital currency created in January 2009 following the housing market crash. It follows the ideas set out in a whitepaper by the mysterious and pseudonymous Satoshi..." },
        { name: "Blockchain", description: "A system in which a record of transactions made in bitcoin or another cryptocurrency are maintained across several computers that are linked in a peer-to-peer network..." },
        //C
        { name: "Cryptocurrency", description: "a digital currency in which transactions are verified and records maintained by a decentralized system using cryptography, rather than by a centralized authority..." },
        //D
        { name: "DeFI", description: "DeFi stands for “decentralized finance” and refers to the ecosystem comprised of financial applications that are being developed on top of blockchain systems." },
        //H
        { name: "Hardfork", description: "A hard fork (or hardfork), as it relates to blockchain technology, is a radical change to a network's protocol that makes previously invalid blocks and transactions valid, or vice-versa. A hard fork requires all nodes or users to upgrade to the latest version of the protocol software..." },
        //I
        { name: "ICO", description: "a process or event in which a company (especially a start-up) attempts to raise capital by selling a new cryptocurrency, which investors may purchase in the hope that the value of the cryptocurrency will increase, or to later exchange for services offered by that company..." },
        { name: "ICO", description: "a process or event in which a company (especially a start-up) attempts to raise capital by selling a new cryptocurrency, which investors may purchase in the hope that the value of the cryptocurrency will increase, or to later exchange for services offered by that company..." },
        { name: "ICO", description: "a process or event in which a company (especially a start-up) attempts to raise capital by selling a new cryptocurrency, which investors may purchase in the hope that the value of the cryptocurrency will increase, or to later exchange for services offered by that company..." },
        { name: "ICO", description: "a process or event in which a company (especially a start-up) attempts to raise capital by selling a new cryptocurrency, which investors may purchase in the hope that the value of the cryptocurrency will increase, or to later exchange for services offered by that company..." },
        { name: "ICO", description: "a process or event in which a company (especially a start-up) attempts to raise capital by selling a new cryptocurrency, which investors may purchase in the hope that the value of the cryptocurrency will increase, or to later exchange for services offered by that company..." },
        { name: "ICO", description: "a process or event in which a company (especially a start-up) attempts to raise capital by selling a new cryptocurrency, which investors may purchase in the hope that the value of the cryptocurrency will increase, or to later exchange for services offered by that company..." },
        { name: "ICO", description: "a process or event in which a company (especially a start-up) attempts to raise capital by selling a new cryptocurrency, which investors may purchase in the hope that the value of the cryptocurrency will increase, or to later exchange for services offered by that company..." },
        { name: "ICO", description: "a process or event in which a company (especially a start-up) attempts to raise capital by selling a new cryptocurrency, which investors may purchase in the hope that the value of the cryptocurrency will increase, or to later exchange for services offered by that company..." },
        { name: "ICO", description: "a process or event in which a company (especially a start-up) attempts to raise capital by selling a new cryptocurrency, which investors may purchase in the hope that the value of the cryptocurrency will increase, or to later exchange for services offered by that company..." },
        { name: "ICO", description: "a process or event in which a company (especially a start-up) attempts to raise capital by selling a new cryptocurrency, which investors may purchase in the hope that the value of the cryptocurrency will increase, or to later exchange for services offered by that company..." },

    ];

    const handleChange = e => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    const handleReset = e => {
        e.preventDefault();
        setSearchTerm("");
    }

    if (searchTerm.length > 0) {
        cryptoData = cryptoData.filter((i) => {
            return i.name.toLowerCase().match(searchTerm.toLowerCase());
        })
    }

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <div className="container">
            <div className="buttons-card">

                <div className="button">
                    <Link to="/">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Powrót
                        </Link>
                </div>
                <div className="button" onClick={handleReset}>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Wyczyść
                    </a>
                </div>
            </div>
            <br></br>
            <div className="form">
                <div lassName="name-section"></div>
                <input
                    type="text"
                    name="name"
                    autocomplete="off"
                    required
                    value={searchTerm}
                    onChange={handleChange}
                />
                <label for="name" class="label-name">
                    <span class="content-name">Szukaj</span>
                </label>
            </div>
            <div className="words-box">
                {cryptoData.map((item, index) => {
                    return (
                        <IconContext.Provider value={{ color: "ff9900", size: '25px' }}>
                            <>
                                <div className="wrap" onClick={() => toggle(index)} key={index}>
                                    <h1 className="name">{item.name}</h1>
                                    <span>{clicked === index ? <IoIosArrowDown /> : <FiPlus />}</span>
                                </div>
                                <AnimatePresence>
                                    {clicked === index ? (
                                        <motion.div className="dropdown"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <p className="description">{item.description}</p>
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>
                            </>
                        </IconContext.Provider>
                    )
                })}
            </div>
        </div>

    )
}

export default DictionaryContainer
