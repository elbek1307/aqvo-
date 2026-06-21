import React from 'react'
import '../Middle/middle.css'
import logo from "../Middle/image/logo.png"

import p1 from '../Middle/image/product1.jpg'
import p2 from '../Middle/image/product2.jpg'
import p3 from '../Middle/image/product3.jpg'
import p4 from '../Middle/image/product4.jpg'
import p5 from '../Middle/image/product5.jpg'
import p6 from '../Middle/image/product6.jpg'


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
            <img className='p1' src={p1} alt="alt" />
            <img className='p1' src={p2} alt="alt" />
            <img className='p1' src={p3} alt="alt" />
            <img className='p1' src={p4} alt="alt" />
            <img className='p1' src={p5} alt="alt" />
            <img className='p1' src={p6} alt="alt" />
        </div>
    </>
  )
}

export default middle