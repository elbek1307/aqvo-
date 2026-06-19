import React from 'react'
import '../Middle/middle.css'
import logo from "../Middle/image/logo.png"

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
    </>
  )
}

export default middle