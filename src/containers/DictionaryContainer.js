import React, {useState, useEffect} from 'react'
import './DictionaryContainer.css';
import { Link } from 'react-router-dom';
import { CryptoData } from './CryptoData';


function DictionaryContainer() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = e => {
     setSearchTerm(e.target.value);
    };
    useEffect(() => {
        const results = CryptoData.filter(data => data.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);
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
         <ul>
            {searchResults.map((item, index) =>(
                <li key={index}>{item}</li>
            ))}
         </ul>
        </div>
    )
}

export default DictionaryContainer
