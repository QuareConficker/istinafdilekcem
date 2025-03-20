import Aos from 'aos';
import 'aos/dist/aos.css';

import React, { useEffect } from 'react'
import { Routes, Route, } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import PhotoGallery from './components/PhotoGallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import BlogList from './components/BlogList'
import BlogDetail from './components/BlogDetail'
import NotFound from './components/NotFound'

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
        <Route path="/services" element={<Services />} />
        <Route path="/gallery/photos" element={<PhotoGallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:blogId" element={<BlogDetail />} />
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