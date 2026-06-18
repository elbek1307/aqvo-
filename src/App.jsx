import React from 'react'
import "./App.css"

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Main/Hero/Hero'
import Sect_foo_farhod from './Components/Sect_foo_farhod/Sect_foo_farhod'
import AboutUs from './Components/AboutUs/AboutUs'


const App = () => {
  return (
    <>
     <header>
      <Navbar />
       <Hero/>
     </header>
    
     <main>
     <AboutUs />
     <Sect_foo_farhod/>
     </main>
    </>
  )
}

export default App