import Aos from 'aos';
import 'aos/dist/aos.css';

import React, { useEffect } from 'react'
import { Routes, Route, } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import BlogDetail from './components/BlogDetail'
import NotFound from './components/NotFound'
import Testimonials from './components/Testimonials';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animasyon süresi
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden w-full">
      <Navbar />

      <Routes>
        {/* Ana Site Rotaları */}
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:blogId" element={<BlogDetail />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <>
        <Footer />
        <FloatingButtons />
      </>

    </div>
  )
}

export default App