import React, { useRef, useState, useEffect } from 'react';

const CenterOnClickSlider = () => {
  const containerRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);


  const arr = ['https://www.instagram.com/p/CqpqvBfvdqs/embed', 'https://www.instagram.com/reel/Cs8dUbChyAC/embed','https://www.instagram.com/reel/CwrgWi5hLFR/embed',
    'https://www.instagram.com/reel/C1buAnChi-l/embed','https://www.instagram.com/reel/CxKmkvChGfP/embed','https://www.instagram.com/reel/Ct1BO73BfMP/embed','https://www.instagram.com/reel/CtTZSyUvQB9/embed',
    'https://www.instagram.com/reel/Css_g6xrnjK/embed'
  ];
  

  const items = [...arr, ...arr, ...arr];

  const scrollToCenter = (index) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const item = container.children[index];
      const containerCenter = container.offsetWidth / 2;
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const scrollPosition = itemCenter - containerCenter;

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const updateCenterIndexOnScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const containerCenter = container.offsetWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      Array.from(container.children).forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(childCenter - container.scrollLeft - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCenterIndex(closestIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft <= 0) {
          container.scrollLeft = maxScrollLeft / 3;
        } 
        else if (container.scrollLeft >= maxScrollLeft) {
          container.scrollLeft = maxScrollLeft / 3;
        }

        updateCenterIndexOnScroll();
      }
    };

    container.addEventListener('scroll', handleScroll);
    container.scrollLeft = container.scrollWidth / 3;

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden transition-all duration-1000">
      <div
        ref={containerRef}
        className="flex space-x-1 overflow-x-auto px-4 items-center h-96 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' ,scrollbarWidth:'none'}}
      >
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => scrollToCenter(index)}
            className={`flex-shrink-0 w-1/6 h-56 cursor-pointer transition-all duration-300 rounded-lg overflow-hidden
              ${centerIndex === index ? ' scale-y-150 scale-x-120  z-30 border-4 border-gray-300' : 'scale-100 z-0'}
            `}
            style={{ scrollSnapAlign: 'center' }}
          >
            <iframe src={item} frameborder="0" className='absolute top-[-7rem] left-[-2.1rem]' width="130%" height="150%" scrolling="no" allowtransparency="true" allow="encrypted-media"></iframe>


          </div>
        ))}
      </div>
    </div>
  );
};

export default CenterOnClickSlider;
