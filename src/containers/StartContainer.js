import React from 'react'
import './StartContainer.css';
import { Link } from 'react-router-dom';
import BlockchainImage from '../images/blockchain.png'


function StartContainer() {
    return (
        <div className="start-container">
            <h1>Witaj</h1>
            <button>
               <Link to="/DictionaryContainer">Rozpocznij wyszukiwanie!</Link>
            </button>
            <img className ="blockchain" src={BlockchainImage} />
        </div>
    )
}

export default StartContainer
