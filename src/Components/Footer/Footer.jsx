import React from 'react'
import './Footer.css'
import { useTranslation } from "react-i18next";

import Instagram from '../img/Footer/Instagram.png'
import Telegram from '../img/Footer/Link.png'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="Footer">
        <div className="container">
            <div className="Footer-container">
                <p className="Footer-text">{t("Footer.Izlagan")}</p>
                
                <div className="Footer-socials">
                    <a href="https://www.instagram.com/islombek.raximjanov/" target="_blank" rel="noreferrer">
                        <img src={Instagram} alt="Instagram" className="Footer-icon" />
                    </a>
                    <a href="https://web.telegram.org/a/">
                        <img src={Telegram} alt="Telegram" className='Footer-icon' />
                    </a>
                    
                    <a href="https://t.me" target="_blank" rel="noreferrer" className="Footer-social-link">
                        <svg 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="Footer-icon-svg"
                        >
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                    </a>
                </div>
                
                <p className="Footer-copy">{t("Footer.Barcha")}</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer