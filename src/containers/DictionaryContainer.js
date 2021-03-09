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
        { name: "AML", description: "AML (Anti-Money Laudering/Przeciwdziałanie Praniu Pieniędzy) to działanie które ma na celu wyeliminowanie zjawiska prania brudnych pieniędzy przez instytucje świadczące usługi finansowe (giełdy, portfele internetowe, banki itp). AML ma za zadanie zabezpieczyć system finansowy przed wykorzystaniem go do przestępczych celów (np. finansowania terroryzmu)." },
        { name: "ATH/All-Time High", description: "ATH to najwyższa wartość wszechczasów, jaką osiągnęło dane aktywo. Termin często używany w środowisku kryptowalutowym lub na innych rynkach finansowych." },
        { name: "ATL/All-Time Low", description: "ATL to najniższa wartość wszechczasów, jaką osiągnęło dane aktywo. Termin często używany w środowisku kryptowalutowym lub na innych rynkach finansowych." },
        //C
        { name: "Circulating Supply", description: "Circulating Supply/Podaż w obiegu, to liczba wydobytych lub utworzonych monet dostępnych na rynku w danej chwili, która znajduję się w rękach ogółu społeczeństwa." },
        //F
        { name: "Faucet/Kranik", description: "Faucet/Kranik kryptowalutowy to strona, która rozdaje niewielkie ilości kryptowaluty. Wchodząc na dany faucet, użytkownik najczęściej musi obejrzeć reklamę lub rozwiązać captch'e z reklamowym hasłem. Kraniki rozdają śladowe ilości kryptowalut, jest to świetny sposób na uzyskanie swoich pierwszych monet dla nowych uczestniku rynku. Najpopularniejsze serwisy oferują takie kryptowaluty jak Bitcoin, Litecoin czy Dogecoin." },
        //H
        { name: "HODL", description: "HODL lub Hodlowanie to strategia długoterminowego inwestowania w kryptowaluty. Słowo to nawiązuje do angielskiego hold (trzymać). Hodlerzy zakupując swoje kryptowaluty nie są podatni na wahania cen swoich monet i wyznają zasadę 'Kupuj i trzymaj'. Słowo HODL powstało w Grudniu 2013 roku, w momencie w którym cena Bitcoin'a spadła ze swojego szczytu o 50%. Jeden z użytkowników na forum BitcoinTalk założył wątek o nazwie 'I AM HODLING' pod wpływem wypitego whisky. Użytkownik stwierdził że nie zna się na giełdzie oraz aspektach z nią powiązanych, dlatego też uznał, że będzie trzymał swojego Bitcoina długoterminowo. Post oraz nazwa tematu tak mocno spodobała się użytkownikom forum, że dziś cała społeczność przyjęła błędne słowo HODL jako strategię długoterminowego inwestowania w kryptowaluty." },
        //I
        { name: "ICO", description: "Initial Coin Offering to metoda pozyskania kapitału przez start'upy za pomocą kryptowalut. W ramach tego typu finansowania, firmy decydują się na emisję swoich tokenów, które skupowane są przez potencjalnych inwestorów w ramach pierwszej publicznej oferty. Inwestowanie w ICO obarczone jest ryzykiem ze względu na dość słabe urelugowanie prawne środowiska kryptowalut oraz blockchain. ICO to odpowiednik giełdowego IPO (publiczna emisja akcji)." },
        //K
        { name: "KYC", description: "KYC (Know Your Customer/Poznaj Swojego Klienta) to procedura, która umożliwia skuteczną weryfikację tożsamości klienta, który korzysta z zcentralizowanych giełd (np. Binance, Coinbase), portfeli internetowych (np. Revolut, Skrill), czy też bankowości lub innych podmiotów świadczących usługi finansowe. Najczęściej podmioty wymagają od swoich klientów przesłania skanu lub zdjęcia dokumentu tożsamości, zdjęcie swojej twarzy oraz wyciągu bankowego lub rachunku za media w celu ustalenia adresu zamieszkania. KYC ma za zadanie ustalić wiarygodność użytkownika, by zapobiec przekrętom finansowym, kradzieży tożsamości, czy też praniu brudnych pieniędzy (AML) oraz finansowaniu terroryzmu." },
        //M
        { name: "Max Supply", description: "Max Supply/Podaż maksymalna, to liczba wszystkich monet, która zostanie kiedykolwiek utworzona lub wykopana. Liczba ta nigdy nie zostanie przekroczona." },
        //P
        { name: "P2P/Peer-to-peer", description: "Peer-to-peer/równy-z-równym to model komunikacji w sieci internetowej, który opiera się na równorzędności obu stron. Dzięki P2P można odbierać dane oraz je wysyłać. W sieci Peer-to-peer systemy komputerowe mogą równocześnie pełnić funkcję klienta oraz serwera, dzięki czemu nie jest wymagany serwer centralny." },
        //S 
        { name: "Satoshi (jednostka)", description: "Każdy Bitcoin dzieli się na 100 000 000 mniejszych jednostek, które nazywają się Satoshi. Społeczność Bitcoin'a nadała taką nazwę na cześć twórcy Bitcoin'a i technoologii Blockchain. Jendostka Satoshi to odpowiednik amerykańskich centów lub polskich groszy." },
        { name: "Satoshi Nakamoto", description: "Satoshi Nakamoto to anonimowy twórca (lub grupa twórców), który 3 stycznia 2009 roku uruchomił pierwszy w historii zdecentralizowany system płatności peer-to-peer, opierający się na walucie Bitcoin. System ten jest niezależy od takich instytucji jak rządy, banki centralne, czy inne podmioty prawne świadczące usługi z zakresu przekazów pieniężnych." },
        //T
        { name: "Total Supply", description: "Total Supply/Podaż całkowita, to liczba wszystkich wydobytych lub utworzonych monet, z tą różnicą, że nie wszystkie muszą być dostępne na rynku i znajdować się w rękach ogółu społeczeństwa. Bywają monety które są zarezerwowane lub zablokowane i nie są sprzedawane na rynku publicznym, co nie wpływa na cenę danego aktywa. Podaż całkowita zwykle jest równa lub większa niż podaż w obiegu (circullating supply)." },

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

                <motion.div className="button"
                    initial={{ x: -200 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring' }}
                >
                    <Link to="/">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Powrót
                        </Link>
                </motion.div>
                <motion.div className="button" onClick={handleReset}
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring' }}>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Wyczyść
                    </a>
                </motion.div>
            </div>
            <br></br>
            <motion.div className="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1 } }}
            >
                <div className="name-section"></div>
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
            </motion.div>
            <motion.div className="words-box"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                transition={{ type: 'string', stiffnes: 300 }}
            >
                {cryptoData.map((item, index) => {
                    return (
                        <IconContext.Provider value={{ color: "ff9900", size: '25px' }}>
                            <>
                                <div className="wrap" onClick={() => toggle(index)} key={index}>
                                    <motion.h1 className="name"
                                        whileHover={{ scale: 1.1, originX: 0, color: '#ff9900' }}
                                    >
                                        {item.name}
                                    </motion.h1>
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
            </motion.div>
        </div>

    )
}

export default DictionaryContainer
