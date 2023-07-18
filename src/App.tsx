import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Stepper from './Steps/Stepper';
import Contact from './Steps/Contact';
import Education from './Steps/Education';
import About from './Steps/About';
import Confirm from './Steps/Confirm';

import tw from "tailwind-styled-components"

const Container = tw.div`
     w-full 
     px-16 
     py-10
`;

function App() {


  return (
    <>
      <AppProvider>
        <Navbar />
        <Container>
          <Router>
            <Stepper />
            <Routes>
              <Route path="/" element={<Contact />} />
              <Route path="/education" element={<Education />} />
              <Route path="/about" element={<About />} />
              <Route path="/confirm" element={<Confirm />} />
            </Routes>
          </Router>
        </Container>
        <Footer />
      </AppProvider>

    </>
  )
}

export default App
