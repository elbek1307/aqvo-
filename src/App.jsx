import React from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Main/Hero/Hero";
import Sect_foo_farhod from "./Components/Sect_foo_farhod/Sect_foo_farhod";

import AboutUs from "./Components/AboutUs/AboutUs";

import Footer from "./Components/Footer/Footer.jsx";
import Sertifikat from "./Components/Sertifikat/Sertifikat.jsx";
import Middle from '../src/Components/Middle/middle.jsx'


const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <AboutUs />
        <Middle/>
        <Sect_foo_farhod />
        <Sertifikat/>
      </main>
      <Footer />
    </>
  );
};

export default App;
