import React, { useState, useEffect } from 'react';
import VideoPlayer from './Arts';

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
  const [isZoom, setIsZoom] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [videoLink, setVideoLink] = useState('');

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

      default:
        const arr = [...realestic, ...color, ...paper, ...stencil, ...craft, ...portraits];
        const uniqueImages = arr.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.img === value.img && t.link === value.link
          ))
        );
        setAllImages(uniqueImages);
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
    <div
      className="p-4 absolute top-16 mt-3 md:w-[95%] w-[90%] h-[80%] overflow-y-auto"
      style={{ scrollbarWidth: 'none' }}
    >
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6 grid-cols-2">
        {loadedImages.map((item, index) => (
          <div
            key={index}
            className={`flex justify-center items-center opacity-0 animate-fadeIn hover:scale-105 transition duration-300 ${getColumnSpan(
              item.img
            )}`}
            onMouseEnter={(e) => e.stopPropagation()}
            onMouseLeave={(e) => e.stopPropagation()}
          >
            <img
              src={item.img}
              alt={`Image ${index}`}
              onClick={() => {
                setZoomedImage(item.img);
                setVideoLink(item.link);
                setIsZoom(true);
              }}
              className="max-w-full object-contain rounded-lg cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Zoomed Image and Instagram Video */}
      {isZoom && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 ">
          <div className="relative bg-white p-6  shadow-lg max-w-4xl w-full flex flex-col md:flex-row gap-5 overflow-y-auto h-screen">
            {/* Zoomed Image */}

            {/* Instagram Video */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-4">
              <VideoPlayer link={videoLink} />
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img
                src={zoomedImage}
                alt="Zoomed"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-pink-600 hover:bg-pink-700 bg-opacity-80 rounded-full p-2"
              onClick={() => setIsZoom(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageContainer;
