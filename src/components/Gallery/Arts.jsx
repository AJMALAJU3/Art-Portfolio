import React, { useEffect } from 'react';

const VideoPlayer = ({ link }) => {
  useEffect(() => {
    // Dynamically load the Instagram embed script only once
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      // Reload the Instagram embed every time the link changes
      window.instgrm.Embeds.process();
    };
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts or before re-running the effect
    return () => {
      document.body.removeChild(script);
    };
  }, [link]); // This useEffect will run every time the `link` prop changes

  return (
    <div className="max-w-lg mx-auto">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`https://www.instagram.com/reel/${link}`}
        data-instgrm-version="14"
        style={{ width: '100%', margin: '0 auto' }}
      >
        <a href={`https://www.instagram.com/reel/${link}`}>
          View on Instagram
        </a>
      </blockquote>
    </div>
  );
};

export default VideoPlayer;
