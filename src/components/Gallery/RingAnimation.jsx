import React, { useEffect, useRef } from 'react';

const items = [
  'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'
];

function EndlessRingCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    const rotationSpeed = 1.05;
    const animateCarousel = () => {
      angle += rotationSpeed;
      carouselRef.current.style.transform = `rotateY(${angle}deg)`;
      requestAnimationFrame(animateCarousel);
    };
    animateCarousel();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen perspective">
      <div ref={carouselRef} className="carousel-container">
        {items.map((item, index) => (
          <div
            key={index}
            className="carousel-item "
            style={{
              transform: `rotateY(${index * (360 / items.length)}deg) translateZ(200px)`,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EndlessRingCarousel;
