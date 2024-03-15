import React, { useContext } from 'react';
import './App.css';
import Services from './Components/Services/Service';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';
import Footer from './Components/Footer/Footer';
import { ThemeContext } from './Context';

const App = () => {
  const { darkMode } = useContext(ThemeContext); // Destructure the context directly

  return (
    <div className="App" style={{
      background: darkMode ? 'black' : '',
      color: darkMode ? 'white' : ''
    }}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
