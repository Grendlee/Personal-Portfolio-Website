import React, { useRef } from 'react';
import profilePic from "../assets/me.jpg";

const images = [
  profilePic,
  profilePic,
  profilePic,
  profilePic,
  profilePic,
]; // Add multiple copies or different images

const PictureGallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Adjust scroll step
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-10">
      
        {/* Header */}
        <div className="flex flex-col text-center">
            <h1 className="text-3xl py-4 text-center font-normal">Photos I Have Taken</h1>
  
        </div>
      
        {/* Image Gallery */}
        <div ref={scrollRef} className="flex overflow-x-scroll scroll-smooth space-x-4 p-4 scrollbar-hide snap-x snap-mandatory">
            {images.map((src, index) => (
            <div key={index} className="snap-center shrink-0">
                <img src={profilePic} alt="profilePhoto" className="w-80 h-60 object-cover rounded-lg" />
            </div>
            ))}
        </div>
    </div>
  );
}

export default PictureGallery;
