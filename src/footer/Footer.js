import React, { useState, useEffect } from 'react'
import { FiMail } from 'react-icons/fi'
import { FaRegHandPeace } from 'react-icons/fa'
import { IoLogoBitcoin } from 'react-icons/io'
import { AiFillCopy } from 'react-icons/ai'
import { IconContext } from 'react-icons';
import QrBtc from '../images/qr-btc.svg'
import QrEth from '../images/qr-eth.svg'
import './Footer.css';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import { CopyToClipboard } from 'react-copy-to-clipboard';


Modal.setAppElement('#root');

function Footer() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [copiedAdress, setCopiedAdress] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopiedAdress(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [copiedAdress]);

    return (
        <div className="footer">
            <motion.span className="github-text" onClick={() => setModalIsOpen(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
            >
                <a href="#">O projekcie <FaRegHandPeace /></a>
            </motion.span>
            <Modal
                className="Modal"
                overlayClassName="Overlay"
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <div className="modal-div">
                    <IconContext.Provider value={{ color: "ff9900", size: "25px", marginTop: "50px" }}>
                        <div className="modal-exit">
                            <button onClick={() => setModalIsOpen(false)}>X</button>
                        </div>
                        <div className="modal-header">
                            <h1>O projekcie <FaRegHandPeace /></h1>
                        </div>
                        <div className="modal-paragraph">
                            <p><span className="logo-grey">cotocrypto</span><span className="logo-orange">.pl  </span>to projekt który ma za zadanie edukować początkujących oraz doświadczonych uczestników rynku w zakresie słownictwa powiązanego z technologią blockchain oraz kryptowalutami.</p>
                        </div>
                        <div className="modal-header">
                            <h1>Wspomóż projekt<IoLogoBitcoin /></h1>
                        </div>
                        <div className="modal-paragraph">
                            <p>Jeśli podoba się Tobie projekt i chciałbyś pomóc w rozwoju, to możesz dofinansować inicjatywę przelewając Satoshi lub Ethereum. Projekt również jest zweryfikowanym wydawcą przeglądarki Brave.</p>
                        </div>
                    </IconContext.Provider>
                    <div className="modal-qrcode">
                        <div className="modal-qrbox">
                            <img className="qr-code" src={QrBtc} />
                            <span class="btcadress-header">ADRES BTC:</span>
                            <span class="btcadress-adress">bc1qd5030jzt94rx9em8c5790m3h8aswqxz7vwwuwz</span>
                            <IconContext.Provider value={{ color: "ff9900", size: "12px" }}>
                                <CopyToClipboard text="bc1qd5030jzt94rx9em8c5790m3h8aswqxz7vwwuwz" onCopy={() => setCopiedAdress(true)}>
                                    <motion.button class="btcbutton"
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                    >
                                        <AiFillCopy />KOPIUJ</motion.button>
                                </CopyToClipboard>
                            </IconContext.Provider>
                        </div>
                        <div className="modal-qrbox">
                            <img className="qr-code" src={QrEth} />
                            <span class="btcadress-header">ADRES ETH:</span>
                            <span class="btcadress-adress">0x4892825ec9657033B4fA6250537Bc30B8180C134</span>
                            <IconContext.Provider value={{ color: "#62688F", size: "12px" }}>
                                <CopyToClipboard text="0x4892825ec9657033B4fA6250537Bc30B8180C134" onCopy={() => setCopiedAdress(true)}>
                                    <motion.button class="ethbutton"
                                        whileHover={{ scale: 1.2, rotate: -10 }}
                                    >
                                        <AiFillCopy />KOPIUJ</motion.button>
                                </CopyToClipboard>
                            </IconContext.Provider>
                            <AnimatePresence>
                                {copiedAdress ? (
                                    <motion.div className="copied-notification"
                                        initial={{ opacity: 0, y: 50, scale: 0.3 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                                    >
                                        <span>Skopiowano!</span>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </Modal>
            <motion.span className="github-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 2 } }}
            >
                <a href="mailto: dezignProjects@outlook.com">
                    Skontaktuj się <FiMail />
                </a>
            </motion.span>
            <motion.span className="github-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 3 } }}
            >
                &copy; {1900 + new Date().getYear()} by dZ
            </motion.span>
        </div>
    )
}

export default Footer
