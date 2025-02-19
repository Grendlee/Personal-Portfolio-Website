import React, { useRef } from 'react';
import pic1 from "../assets/gallery1.jpeg";
import pic2 from "../assets/gallery2.jpg";
import pic3 from "../assets/gallery3.jpg";
import pic4 from "../assets/gallery4.jpg";

// Image Array
const images = [pic1, pic2, pic3, pic4];

const PictureGallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full mx-auto py-10 border-t border-neutral-800 pb-24 my-14">
  
      {/* Header */}
      <div className="flex flex-col text-center">
        <h1 className="text-4xl py-4 font-normal">Photos I Have Taken</h1>
      </div>

      {/* Image Gallery */}
      <div className="w-full flex justify-center">
        <div 
          ref={scrollRef} 
          className="max-w-5xl flex justify-start items-center text-center overflow-x-scroll scroll-smooth space-x-2 p-4 scrollbar-hide snap-x snap-mandatory"
        >
          {images.map((src, index) => (
            <div key={index} className="snap-center shrink-0 flex justify-center">
              <img src={src} alt={`Gallery ${index}`} className="w-[450px] h-[350px] object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PictureGallery;
