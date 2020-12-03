import React from 'react'
import { FiGithub } from 'react-icons/fi'
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <span className="github-text">
                <a href="https://github.com/deZPro/cotocrypto-cryptoDictionary" target="_blank">
                    Check project on Github! <FiGithub />
                </a>
            </span>
        </div>
    )
}

export default Footer
