import React, { useEffect } from 'react';

const VideoPlayer = ({ link }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      window.instgrm.Embeds.process();
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [link]);

  const handleNavigation = () => {
    window.location.href = 'https://www.instagram.com/ajmal_cxbrx'; 
  };

  return (
    <div className="max-w-lg mx-auto h-full relative">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`https://www.instagram.com/reel/${link}`}
        data-instgrm-version="14"
        style={{ width: '100%', margin: '0 auto' }}
      >
        <button
          onClick={handleNavigation}
          className="h-full absolute left-0 top-0 bottom-0 right-0 flex items-center justify-center font-semibold text-blue-500 underline hover:text-blue-400"
          style={{
            textDecoration: 'underline',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          View on Instagram
        </button>
      </blockquote>
    </div>
  );
};

export default VideoPlayer;
