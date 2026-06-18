import React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer_container">

        <p className="footer_text">{t("footer.text")}</p>

        <div className="footer_socials">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="footer_icon">
            <FaInstagram />
          </a>
          <a href="https://t.me" target="_blank" rel="noreferrer" className="footer_icon">
            <FaTelegramPlane />
          </a>
        </div>

        <p className="footer_copy">{t("footer.copy")}</p>

      </div>
    </footer>
  );
};

export default Footer;