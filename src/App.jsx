import React from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import PictureGallery from './components/PictureGallery';


const App = () => {
  return (
    
    <div className="overflow-x-hidden">



      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>      
      
      <div className="mx-auto px-8">
        <Navbar />
        <Hero />
        <PictureGallery />
      </div>
    </div>

  );
};

export default App