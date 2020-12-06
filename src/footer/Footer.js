import React from 'react'
import { FiGithub, FiMail } from 'react-icons/fi'
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <span className="github-text">
                <a href="https://github.com/deZPro/cotocrypto-cryptoDictionary" target="_blank">
                    Check project on Github! <FiGithub />
                </a>
            </span>
            <span className="github-text">
                <a href="mailto: dezignProjects@outlook.com">
                    Contact us! <FiMail />
                </a>
            </span>
        </div>
    )
}

export default Footer
