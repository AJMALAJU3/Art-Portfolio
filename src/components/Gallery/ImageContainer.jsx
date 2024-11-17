import React, { useState, useEffect } from 'react';
import { realestic } from './ImageGenerator/Realestic';
import { stencil } from './ImageGenerator/Stencil';
import { paper } from './ImageGenerator/PaperPortrait';
import { color } from './ImageGenerator/ColorArt';
import { craft } from './ImageGenerator/Craft';
import { portraits } from './ImageGenerator/AllPortraits';

function ImageContainer({ title }) {
  const [allImages, setAllImages] = useState([]); 
  const [loadedImages, setLoadedImages] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    switch (title) {
      case 'realestic':
        setAllImages(realestic);
        break;
      case 'stencil':
        setAllImages(stencil);
        break;
      case 'paper portrait':
        setAllImages(paper);
        break;
      case 'color portrait':
        setAllImages(color);
        break;
      case 'craft':
        setAllImages(craft);
        break;
      case 'all portraits':
        setAllImages(portraits)
        break;
      default:
        const arr = [...realestic,...color,...paper,...stencil,...craft,...portraits]
        setAllImages([... new Set(arr)]);
    }
  }, [title]);

  useEffect(() => {
    if (currentIndex < allImages.length) {
      const timeout = setTimeout(() => {
        setLoadedImages((prev) => [...prev, allImages[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 300); 

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, allImages]);
  const getColumnSpan = (imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
    return img.naturalWidth > img.naturalHeight ? `col-span-2 md:px-8` : 'col-span-1';
  };
  return (
    <div className="p-4 absolute top-16 mt-3 md:w-[95%] w-[90%] h-[80%] overflow-y-auto">
     <div className="grid gap-5 md:grid-cols-4 lg:grid-cols-6 grid-cols-2">
        {loadedImages.map((image, index) => (
          <div
            key={index}
            className={`flex justify-center items-center opacity-0 animate-fadeIn hover:scale-105 transition duration-300 ${getColumnSpan(
              image
            )}`}
            onMouseEnter={(e) => e.stopPropagation()}
  onMouseLeave={(e) => e.stopPropagation()}
          >
            <img
              src={image}
              alt={`Image ${index}`}
              className="max-w-full object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageContainer;
