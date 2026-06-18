import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Sertifikat.css";
import ser1 from "./ser1.png";
import ser2 from "./ser2.png";
import ser3 from "./ser3.png";
import ser4 from "./ser4.png";

const slidesToShow = 4;
const maxIndex = 4;

const Sertifikat = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(null);

  const handlePrev = () => {
    setCurrentIndex((p) => (p === 0 ? maxIndex : p - 1));
  };

  const handleNext = () => {
    setCurrentIndex((p) => (p >= maxIndex ? 0 : p + 1));
  };

  return (
    <section className="sert">
      <div className="container">

        <h2 className="sert_title">{t("sert.title")}</h2>

        <div className="sert_wrapper">

          <button className="sert_arrow sert_arrow--prev" onClick={handlePrev}>&#8249;</button>

          <div className="sert_track_wrap">
            <div
              className="sert_track"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >

              <div className="sert_card" onClick={() => setActive(ser1)}>
                <img src={ser1} alt="Sertifikat 1" className="sert_img" />
              </div>

              <div className="sert_card" onClick={() => setActive(ser2)}>
                <img src={ser2} alt="Sertifikat 2" className="sert_img" />
              </div>

              <div className="sert_card" onClick={() => setActive(ser3)}>
                <img src={ser3} alt="Sertifikat 3" className="sert_img" />
              </div>

              <div className="sert_card" onClick={() => setActive(ser4)}>
                <img src={ser4} alt="Sertifikat 4" className="sert_img" />
              </div>

              <div className="sert_card" onClick={() => setActive(ser1)}>
                <img src={ser1} alt="Sertifikat 1" className="sert_img" />
              </div>

              <div className="sert_card" onClick={() => setActive(ser2)}>
                <img src={ser2} alt="Sertifikat 2" className="sert_img" />
              </div>

              <div className="sert_card" onClick={() => setActive(ser3)}>
                <img src={ser3} alt="Sertifikat 3" className="sert_img" />
              </div>

              <div className="sert_card" onClick={() => setActive(ser4)}>
                <img src={ser4} alt="Sertifikat 4" className="sert_img" />
              </div>

            </div>
          </div>

          <button className="sert_arrow sert_arrow--next" onClick={handleNext}>&#8250;</button>

        </div>

        <div className="sert_dots">
          <span className={`sert_dot ${currentIndex === 0 ? "sert_dot--active" : ""}`} onClick={() => setCurrentIndex(0)} />
          <span className={`sert_dot ${currentIndex === 1 ? "sert_dot--active" : ""}`} onClick={() => setCurrentIndex(1)} />
          <span className={`sert_dot ${currentIndex === 2 ? "sert_dot--active" : ""}`} onClick={() => setCurrentIndex(2)} />
          <span className={`sert_dot ${currentIndex === 3 ? "sert_dot--active" : ""}`} onClick={() => setCurrentIndex(3)} />
          <span className={`sert_dot ${currentIndex === 4 ? "sert_dot--active" : ""}`} onClick={() => setCurrentIndex(4)} />
        </div>

      </div>

      {active && (
        <div className="sert_modal" onClick={() => setActive(null)}>
          <div className="sert_modal_inner" onClick={(e) => e.stopPropagation()}>
            <button className="sert_modal_close" onClick={() => setActive(null)}>✕</button>
            <img src={active} alt="Sertifikat" className="sert_modal_img" />
          </div>
        </div>
      )}

    </section>
  );
};

export default Sertifikat;