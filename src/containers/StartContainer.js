import React from 'react'
import './StartContainer.css';
import { Link } from 'react-router-dom';
import BlockchainImage from '../images/blockchain.png'
import Tilt from 'react-parallax-tilt';

function StartContainer() {
    return (
        <div className="start-container">
            <Tilt>
                <div className="card">
                    <div className="card-content">
                        <h1>Witaj</h1>
                        <h3>Rozpocznij wyszukiwanie słów powiązanych z tematyką blockchain. </h3>
                        <button className="button">
                            <Link to="/DictionaryContainer">Rozpocznij</Link>
                        </button>
                    </div>
                </div>
            </Tilt>
            <img className="blockchain" src={BlockchainImage} />
        </div>
    )
}

export default StartContainer
