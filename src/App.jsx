import React from 'react'
import "./App.css";
import "./components/hero/Hero"
import Hero from './components/hero/Hero';
import Featuresection from './components/feature/Featuresection';
import Gallery from './components/gallery/Gallery';
import Parallax from './components/parallax/Parallax';
import Testimonial from './components/testimonial/Testimonial';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Hero/>
      <Featuresection/>
      <Gallery/>
      <Parallax/>
      <Testimonial/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App