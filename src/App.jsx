import React from 'react'
import "./App.css"

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Main/Hero/Hero'

const App = () => {
  return (
    <>
     <header>
      <Navbar />
     </header>
     <Hero/>
    </>
  )
}

export default App