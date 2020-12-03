import React, { useState } from 'react'
import './DictionaryContainer.css';
import { Link } from 'react-router-dom';



function DictionaryContainer() {
    const [searchTerm, setSearchTerm] = useState("");

    let cryptoData = [
        { name: "Bitcoin", description: "Bitcoin is a digital currency created in January 2009 following the housing market crash. It follows the ideas set out in a whitepaper by the mysterious and pseudonymous Satoshi..." },
        { name: "Blockchain", description: "A system in which a record of transactions made in bitcoin or another cryptocurrency are maintained across several computers that are linked in a peer-to-peer network..." },
        { name: "Cryptocurrency", description: "a digital currency in which transactions are verified and records maintained by a decentralized system using cryptography, rather than by a centralized authority..." },
        { name: "DeFI", description: "DeFi stands for “decentralized finance” and refers to the ecosystem comprised of financial applications that are being developed on top of blockchain systems." },
        { name: "ICO", description: "a process or event in which a company (especially a start-up) attempts to raise capital by selling a new cryptocurrency, which investors may purchase in the hope that the value of the cryptocurrency will increase, or to later exchange for services offered by that company..." },
        { name: "Hardfork", description: "A hard fork (or hardfork), as it relates to blockchain technology, is a radical change to a network's protocol that makes previously invalid blocks and transactions valid, or vice-versa. A hard fork requires all nodes or users to upgrade to the latest version of the protocol software..." },
    ];

    const handleChange = e => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    if (searchTerm.length > 0) {
        cryptoData = cryptoData.filter((i) => {
            return i.name.toLowerCase().match(searchTerm);
        })
    }
    return (
        <div className="container">
            <h1>Rozpocznij zabawę ze słownkiem!</h1>
            <button>
                <Link to="/">Powrót</Link>
            </button>
            <br></br>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            {cryptoData.map((item, index) => {
                return (
                    <div key={index}>
                        <ul>
                            <li>
                                <span className="name">{item.name}</span>
                                <span className="description"> - {item.description}</span>
                            </li>
                        </ul>
                    </div>
                )
            })}

        </div>
    )
}

export default DictionaryContainer
