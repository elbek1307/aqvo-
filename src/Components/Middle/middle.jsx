import React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import "./Middle.css";
import ktama1 from "./image/ktamat1.jpg";
import ktama2 from "./image/ktama2.jpg";
import ktama3 from "./image/ktama3.jpg";
import ktama4 from "./image/ktama4.jpg";
import ktama5 from "./image/ktama5.jpg";
import ktama6 from "./image/ktama6.jpg";
import utama1 from "./image/utamat1.jpg";
import utama2 from "./image/utamat2.jpg";
import utama3 from "./image/utamat3.jpg";
import utama4 from "./image/utamat4.jpg";
import utama5 from "./image/utamat5.jpg";
import utama6 from "./image/utamat6.jpg";
import utama7 from "./image/utamat7.jpg";
import utama8 from "./image/utamat8.jpg";
import utama9 from "./image/utamat9.jpg";

const Middle = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="middle">
      <div className="container middle_top">

        <div className="middle_text">
          <h2 className="middle_title">
            {t("middle.title_1")} <br /> {t("middle.title_2")}
          </h2>
        </div>

        <div className="middle_socials">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="middle_social_btn">
            <FaInstagram /> {t("middle.instagram")}
          </a>
          <a href="https://t.me" target="_blank" rel="noreferrer" className="middle_social_btn">
            <FaTelegramPlane /> {t("middle.telegram")}
          </a>
        </div>

      </div>

      {/* Katta tomatlar — chapga uzluksiz siljish, 6ta rasm 2 marta */}
      <div className="middle_big_track_wrap">
        <div className="middle_big_track">

          <div className="middle_big_card"><img src={ktama1} alt="ktama1" className="middle_big_img" /></div>
          <div className="middle_big_card"><img src={ktama2} alt="ktama2" className="middle_big_img" /></div>
          <div className="middle_big_card"><img src={ktama3} alt="ktama3" className="middle_big_img" /></div>
          <div className="middle_big_card"><img src={ktama4} alt="ktama4" className="middle_big_img" /></div>
          <div className="middle_big_card"><img src={ktama5} alt="ktama5" className="middle_big_img" /></div>
          <div className="middle_big_card"><img src={ktama6} alt="ktama6" className="middle_big_img" /></div>

          <div className="middle_big_card"><img src={ktama1} alt="ktama1" className="middle_big_img" /></div>
          <div className="middle_big_card"><img src={ktama2} alt="ktama2" className="middle_big_img" /></div>
          <div className="middle_big_card"><img src={ktama3} alt="ktama3" className="middle_big_img" /></div>
          <div className="middle_big_card"><img src={ktama4} alt="ktama4" className="middle_big_img" /></div>
          <div className="middle_big_card"><img src={ktama5} alt="ktama5" className="middle_big_img" /></div>
          <div className="middle_big_card"><img src={ktama6} alt="ktama6" className="middle_big_img" /></div>

        </div>
      </div>

      {/* Kichik tomatlar — o'ngga uzluksiz siljish, 9ta rasm 2 marta */}
      <div className="middle_small_track_wrap">
        <div className="middle_small_track">

          <div className="middle_small_card"><img src={utama1} alt="utama1" className="middle_small_img" /></div>
          <div className="middle_small_card"><img src={utama2} alt="utama2" className="middle_small_img" /></div>
          <div className="middle_small_card"><img src={utama3} alt="utama3" className="middle_small_img" /></div>
          <div className="middle_small_card"><img src={utama4} alt="utama4" className="middle_small_img" /></div>
          <div className="middle_small_card"><img src={utama5} alt="utama5" className="middle_small_img" /></div>
          <div className="middle_small_card"><img src={utama6} alt="utama6" className="middle_small_img" /></div>
          <div className="middle_small_card"><img src={utama7} alt="utama7" className="middle_small_img" /></div>
          <div className="middle_small_card"><img src={utama8} alt="utama8" className="middle_small_img" /></div>
          <div className="middle_small_card"><img src={utama9} alt="utama9" className="middle_small_img" /></div>

          <div className="middle_small_card"><img src={utama1} alt="utama1" className="middle_small_img" /></div>
          <div className="middle_small_card"><img src={utama2} alt="utama2" className="middle_small_img" /></div>
          <div className="middle_small_card"><img src={utama3} alt="utama3" className="middle_small_img" /></div>
          <div className="middle_small_card"><img src={utama4} alt="utama4" className="middle_small_img" /></div>
          <div className="middle_small_card"><img src={utama5} alt="utama5" className="middle_small_img" /></div>
          <div className="middle_small_card"><img src={utama6} alt="utama6" className="middle_small_img" /></div>
          <div className="middle_small_card"><img src={utama7} alt="utama7" className="middle_small_img" /></div>
          <div className="middle_small_card"><img src={utama8} alt="utama8" className="middle_small_img" /></div>
          <div className="middle_small_card"><img src={utama9} alt="utama9" className="middle_small_img" /></div>

        </div>
      </div>

    </section>
  );
};

export default Middle;