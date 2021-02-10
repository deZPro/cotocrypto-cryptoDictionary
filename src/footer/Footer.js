import React, { useState } from 'react'
import { FiMail } from 'react-icons/fi'
import { FaRegHandPeace } from 'react-icons/fa'
import { IoLogoBitcoin } from 'react-icons/io'
import { IconContext } from 'react-icons';
import QrBtc from '../images/qr-btc.svg'
import './Footer.css';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

Modal.setAppElement('#root');

function Footer() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
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
                            <p>cotocrypto.pl to projekt  który ma za zadanie edukować młodych adeptów rynku jak i starych wyjadaczy w zakresie słownictwa powiązanego z technolgią bockchain oraz kryptowalutami.</p>
                        </div>
                        <div className="modal-header">
                            <h1>Wspomóż projekt<IoLogoBitcoin /></h1>
                        </div>
                        <div className="modal-paragraph">
                            <p>Jeśli podoba się Tobie inicjatywa i chciałbyś pomóc w rozwoju projektu, to możesz dofinansować inicjatywę</p>
                        </div>
                        <div className="modal-qrcode">
                            <div className="modal-qrbox">
                                <img className="qr-code" src={QrBtc} />
                        BTC ADRESS
                        <form>
                                    <input value="bc1qu7pdy94mt86fpaxcvslhtnfmz5ht7x2p4gu334" />
                                </form>
                            </div>
                        </div>
                    </IconContext.Provider>
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
