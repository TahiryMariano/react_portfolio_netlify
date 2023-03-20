import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
// import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
