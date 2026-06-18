import React from 'react'
import "./App.css"

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Main/Hero/Hero'
import Sect_foo_farhod from './Components/Sect_foo_farhod/Sect_foo_farhod'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <>
     <header>
      <Navbar />
     </header>
     <Hero/>
     <main>
     <Sect_foo_farhod/>
     </main>
     <Footer/>
    </>
  )
}

export default App