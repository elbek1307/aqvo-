import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import "./Navbar.css";
import logo from "./Logo.svg";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false); 

 
  const languages = [
    { code: "uz", label: "UZB", flag: "🇺🇿" },
    { code: "ru", label: "RUS", flag: "🇷🇺" },
    { code: "en", label: "ENG", flag: "🇺🇸" },
  ];


  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <nav className="nav">
      <div className="container nav_container">
        <ul className={`nav_list ${menuOpen ? "nav_list--open" : ""}`}>
          <li className="nav_item">
            <a href="#" className="nav_link">
              {t("nav.home")}
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              {t("nav.about")}
            </a>
          </li>

          <li className="nav_item nav_mobile_btn_container">
            <a href="#" className="nav_btn nav_mobile_btn">
              {t("nav.login")}
            </a>
          </li>
        </ul>

        <a href="#" className="nav_logo">
          <img src={logo} alt="AQVO" className="nav_logo_img" />
        </a>

        <div className="nav_right">
          
         
          <div className="nav_lang_custom">
            <div 
              className="nav_lang_selected" 
              onClick={() => setLangOpen(!langOpen)}
            >
              <span>{currentLang.flag}</span>
              <span>{currentLang.label}</span>
              <FiChevronDown 
                className={`nav_lang_icon ${langOpen ? "open" : ""}`} 
                size={14} 
              />
            </div>

          
            {langOpen && (
              <ul className="nav_lang_options">
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    className={i18n.language === lang.code ? "active" : ""}
                    onClick={() => changeLang(lang.code)}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* O'ZGARTIRILGAN QISM TUGADI */}

          <a href="#" className="nav_btn">
            {t("nav.login")}
          </a>

          <button className="nav_burger" onClick={() => setMenuOpen((p) => !p)}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;