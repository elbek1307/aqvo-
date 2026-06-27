import React from "react";
import { useTranslation } from "react-i18next";
import SliderPackage from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutUs.css";
import bg1 from "./bg1.jpg";
import bg2 from "./bg2.jpg";
import bg3 from "./bg3.jpg";

const Slider = SliderPackage.default ? SliderPackage.default : SliderPackage;

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="about">
      <Slider {...settings} className="about_slider">

        <div>
          <div className="about_slide" style={{ backgroundImage: `url(${bg1})` }}>
            <div className="about_overlay">
              <div className="container about_content">
                <h2 className="about_title">{t("about.slide1.title")}</h2>
                <p className="about_text">{t("about.slide1.text")}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="about_slide" style={{ backgroundImage: `url(${bg2})` }}>
            <div className="about_overlay">
              <div className="container about_content">
                <h2 className="about_title">{t("about.slide2.title")}</h2>
                <p className="about_text">{t("about.slide2.text")}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="about_slide" style={{ backgroundImage: `url(${bg3})` }}>
            <div className="about_overlay">
              <div className="container about_content">
                <h2 className="about_title">{t("about.slide3.title")}</h2>
                <p className="about_text">{t("about.slide3.text")}</p>
              </div>
            </div>
          </div>
        </div>

      </Slider>
    </section>
  );
};

export default AboutUs;