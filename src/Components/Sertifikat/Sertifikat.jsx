import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Sertifikat.css";
import ser1 from "./ser1.png";
import ser2 from "./ser2.png";
import ser3 from "./ser3.png";
import ser4 from "./ser4.png";

const cards = [ser1, ser2, ser3, ser4, ser1, ser2, ser3, ser4];

const Sertifikat = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(null);
  const [show, setShow] = useState(4);


  useEffect(() => {
    const resize = () => setShow(window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : window.innerWidth <= 1024 ? 3 : 4);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const max = cards.length - show;

  return (
    <section className="sert">
      <div className="container">
        <h2 className="sert_title">{t("sert.title")}</h2>

        <div className="sert_wrapper">
         
          <button className="sert_arrow" onClick={() => setIndex(i => (i === 0 ? max : i - 1))}>
            &#8249;
          </button>

          <div className="sert_track_wrap">
            <div className="sert_track" style={{ transform: `translateX(-${index * (100 / show)}%)` }}>
              {cards.map((img, i) => (
                <div className="sert_card" key={i} onClick={() => setActive(img)}>
                  <img src={img} alt="Sertifikat" className="sert_img" />
                </div>
              ))}
            </div>
          </div>

       
          <button className="sert_arrow" onClick={() => setIndex(i => (i >= max ? 0 : i + 1))}>
            &#8250;
          </button>
        </div>

       
        <div className="sert_dots">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <span
              key={i}
              className={`sert_dot ${index === i ? "sert_dot--active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

  
      {active && (
        <div className="sert_modal" onClick={() => setActive(null)}>
          <div className="sert_modal_inner" onClick={(e) => e.stopPropagation()}>
            <button className="sert_modal_close" onClick={() => setActive(null)}>✕</button>
            <img src={active} alt="Modal" className="sert_modal_img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Sertifikat;