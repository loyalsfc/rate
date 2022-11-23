import React, {useEffect} from 'react';
import Header from './components/Header'
import Hero from './components/Hero';
import WhatIs from './components/WhatIs';
import Utility from './components/Utility';
import Exception from './components/Exception';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function App() {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Hero />
      <WhatIs />
      <Utility />
      {/* <Exception /> */}
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
