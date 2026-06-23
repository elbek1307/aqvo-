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

<<<<<<< HEAD
  return (
    <section className="middle">
      <div className="container middle_top">
=======
import p1 from '../Middle/image/product1.jpg'
import p2 from '../Middle/image/product2.jpg'
import p3 from '../Middle/image/product3.jpg'
import p4 from '../Middle/image/product4.jpg'
import p5 from '../Middle/image/product5.jpg'
import p6 from '../Middle/image/product6.jpg'

import m1 from '../Middle/image/mini1.jpg'
import m2 from '../Middle/image/mini2.jpg'
import m3 from '../Middle/image/mini3.jpg'
import m4 from '../Middle/image/mini4.jpg'
import m5 from '../Middle/image/mini5.jpg'
import m6 from '../Middle/image/mini6.jpg'
import m7 from '../Middle/image/mini7.jpg'
import m8 from '../Middle/image/mini8.jpg'
import m9 from '../Middle/image/mini9.jpg'



const middle = () => {
  return (
    <>
        <div className='lahza'>
            <div>
                <p className='f-lahza'>SIZNING AQVO BILAN LAHZALARINGIZ</p>
                <img className='logo' src={logo} alt="aqvo logo" />
            </div>
            <div className='links'>
                <button className='btn-instagram'><a className='link-instagram' href="https://www.instagram.com/aqvo_jiz/">Bizning Instagram</a></button>
                <button className='btn-telegram'><a className='link-telegram' href="">Bizning Telegram</a></button>
            </div>
        </div>

        <div className='products'>
         <div className='products-track'>
        <img className='p1' src={p1} alt="alt" />
        <img className='p1' src={p2} alt="alt" />
        <img className='p1' src={p3} alt="alt" />
        <img className='p1' src={p4} alt="alt" />
        <img className='p1' src={p5} alt="alt" />
        <img className='p1' src={p6} alt="alt" />
        {/* again */}
        <img className='p1' src={p1} alt="alt" />
        <img className='p1' src={p2} alt="alt" />
        <img className='p1' src={p3} alt="alt" />
        <img className='p1' src={p4} alt="alt" />
        <img className='p1' src={p5} alt="alt" />
        <img className='p1' src={p6} alt="alt" />
        </div>
        </div>

        {/* another mini products */}

        <div className='mini-products'>
            <div className='mini-products-track'>
                <img className='m1' src={m1} alt="alt" />
                <img className='m1' src={m2} alt="alt" />
                <img className='m1' src={m3} alt="alt" />
                <img className='m1' src={m4} alt="alt" />
                <img className='m1' src={m5} alt="alt" />
                <img className='m1' src={m6} alt="alt" />
                <img className='m1' src={m7} alt="alt" />
                <img className='m1' src={m8} alt="alt" />
                <img className='m1' src={m9} alt="alt" />
                {/* again */}
                   <img className='m1' src={m1} alt="alt" />
                <img className='m1' src={m2} alt="alt" />
                <img className='m1' src={m3} alt="alt" />
                <img className='m1' src={m4} alt="alt" />
                <img className='m1' src={m5} alt="alt" />
                <img className='m1' src={m6} alt="alt" />
                <img className='m1' src={m7} alt="alt" />
                <img className='m1' src={m8} alt="alt" />
                <img className='m1' src={m9} alt="alt" />
            </div>
        </div>
    </>
  )
}
>>>>>>> 1ea4c8ab25e19d4cb9147a388b4dc98abf3d1c91

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