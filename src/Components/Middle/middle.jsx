import React from "react";
import "./Middle.css"

import p1 from "./image/product1.jpg";
import p2 from "./image/product2.jpg";
import p3 from "./image/product3.jpg";
import p4 from "./image/product4.jpg";
import p5 from "./image/product5.jpg";
import p6 from "./image/product6.jpg";

import m1 from "./image/mini1.jpg";
import m2 from "./image/mini2.jpg";
import m3 from "./image/mini3.jpg";
import m4 from "./image/mini4.jpg";
import m5 from "./image/mini5.jpg";
import m6 from "./image/mini6.jpg";
import m7 from "./image/mini7.jpg";
import m8 from "./image/mini8.jpg";
import m9 from "./image/mini9.jpg";

const Middle = () => {
  return (
    <>
      <div className="lahza">
        <div>
          <p className="f-lahza">SIZNING AQVO BILAN LAHZALARINGIZ</p>
        </div>
        <div className="links">
          <button className="btn-instagram">
            <a className="link-instagram" href="https://www.instagram.com/aqvo_jiz/">
              Bizning Instagram
            </a>
          </button>
          <button className="btn-telegram">
            <a className="link-telegram" href="">
              Bizning Telegram
            </a>
          </button>
        </div>
      </div>

      <div className="products">
        <div className="products-track">
          <img className="p1" src={p1} alt="alt" />
          <img className="p1" src={p2} alt="alt" />
          <img className="p1" src={p3} alt="alt" />
          <img className="p1" src={p4} alt="alt" />
          <img className="p1" src={p5} alt="alt" />
          <img className="p1" src={p6} alt="alt" />
          {/* again */}
          <img className="p1" src={p1} alt="alt" />
          <img className="p1" src={p2} alt="alt" />
          <img className="p1" src={p3} alt="alt" />
          <img className="p1" src={p4} alt="alt" />
          <img className="p1" src={p5} alt="alt" />
          <img className="p1" src={p6} alt="alt" />
        </div>
      </div>

      {/* another mini products */}
      <div className="mini-products">
        <div className="mini-products-track">
          <img className="m1" src={m1} alt="alt" />
          <img className="m1" src={m2} alt="alt" />
          <img className="m1" src={m3} alt="alt" />
          <img className="m1" src={m4} alt="alt" />
          <img className="m1" src={m5} alt="alt" />
          <img className="m1" src={m6} alt="alt" />
          <img className="m1" src={m7} alt="alt" />
          <img className="m1" src={m8} alt="alt" />
          <img className="m1" src={m9} alt="alt" />
          {/* again */}
          <img className="m1" src={m1} alt="alt" />
          <img className="m1" src={m2} alt="alt" />
          <img className="m1" src={m3} alt="alt" />
          <img className="m1" src={m4} alt="alt" />
          <img className="m1" src={m5} alt="alt" />
          <img className="m1" src={m6} alt="alt" />
          <img className="m1" src={m7} alt="alt" />
          <img className="m1" src={m8} alt="alt" />
          <img className="m1" src={m9} alt="alt" />
        </div>
      </div>

     
    </>
  );
};

export default Middle;