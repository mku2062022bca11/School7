import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContentProvider } from './context/ContentContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Infrastructure from './pages/Infrastructure';
import Activities from './pages/Activities';
import MandatoryDisclosure from './pages/MandatoryDisclosure';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <ContentProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/infrastructure" element={<Infrastructure />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ContentProvider>
    </ThemeProvider>
  );
}

export default App;