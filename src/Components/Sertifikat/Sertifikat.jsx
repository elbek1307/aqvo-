import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SliderPackage from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sertifikat.css";
import ser_bg from "../../assets/ser_bg.jpg";
import ser1 from "../../assets/ser1.jpg";
import ser2 from "../../assets/ser2.jpg";
import ser3 from "../../assets/ser3.jpg";
import ser4 from "../../assets/ser4.jpg";

const Slider = SliderPackage.default ? SliderPackage.default : SliderPackage;

const sertifikatlar = [ser1, ser2, ser3, ser4];

const Sertifikat = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(null);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="sert" style={{ backgroundImage: `url(${ser_bg})` }}>
      <div className="sert_overlay">
        <div className="container">

          <h2 className="sert_title">{t("sert.title")}</h2>

          <Slider {...settings} className="sert_slider">

            <div>
              <div className="sert_card" onClick={() => setActive(ser1)}>
                <img src={ser1} alt="Sertifikat 1" className="sert_img" />
              </div>
            </div>

            <div>
              <div className="sert_card" onClick={() => setActive(ser2)}>
                <img src={ser2} alt="Sertifikat 2" className="sert_img" />
              </div>
            </div>

            <div>
              <div className="sert_card" onClick={() => setActive(ser3)}>
                <img src={ser3} alt="Sertifikat 3" className="sert_img" />
              </div>
            </div>

            <div>
              <div className="sert_card" onClick={() => setActive(ser4)}>
                <img src={ser4} alt="Sertifikat 4" className="sert_img" />
              </div>
            </div>

          </Slider>
        </div>
      </div>

      {/* Modal */}
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