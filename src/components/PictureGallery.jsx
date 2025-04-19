import React, { useRef } from 'react';
import pic1 from "../assets/gallery1_compressed.jpg";
import pic4 from "../assets/gallery2_compressed.jpg";
import pic3 from "../assets/gallery3_compressed.jpg";
import pic2 from "../assets/gallery4_Compressed.jpg";

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
    <div className="w-full flex flex-col items-center border-t border-neutral-800 my-14">
      <h2 className="my-10 text-center text-4xl">My Adventures</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-2 gap-1 max-w-5xl w-full">
        {images.map((src, index) => (
          <div key={index} className="aspect-square overflow-hidden ">
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PictureGallery;
