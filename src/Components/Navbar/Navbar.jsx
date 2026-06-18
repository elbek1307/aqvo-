import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import "./Navbar.css";
import logo from "./logo.svg";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="nav">
      <div className="container nav_container">

        <ul className={`nav_list ${menuOpen ? "nav_list--open" : ""}`}>
          <li className="nav_item">
            <a href="#" className="nav_link">{t("nav.home")}</a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">{t("nav.about")}</a>
          </li>
        </ul>

        <a href="#" className="nav_logo">
          <img src={logo} alt="AQVO" className="nav_logo_img" />
        </a>

        <div className="nav_right">
          <div className="nav_lang">
            <select className="nav_select" onChange={changeLang} defaultValue={i18n.language}>
              <option value="uz">UZB</option>
              <option value="ru">RUS</option>
              <option value="en">ENG</option>
            </select>
            <FiChevronDown className="nav_lang_icon" size={14} />
          </div>

          <a href="#" className="nav_btn">{t("nav.login")}</a>

          <button className="nav_burger" onClick={() => setMenuOpen((p) => !p)}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;