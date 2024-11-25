import React from 'react'
import VideoPlayer from './Arts';

function ImagePreview({setIsZoom,videoLink,zoomedImage}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 ">
          <div className="relative bg-neutral-200 p-6  shadow-lg max-w-4xl w-full flex flex-col md:flex-row gap-5 overflow-y-auto h-screen items-center">
            <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-4 ">
              <VideoPlayer link={videoLink} />
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center ">
              <img
                src={zoomedImage}
                alt="Zoomed"
                className="max-w-full max-h-[80vh] object-contain rounded-lg "
              />
            </div>

            <button
              className="fixed lg:absolute top-2 right-2 text-white bg-pink-600 hover:bg-pink-700 bg-opacity-80 rounded-full p-2"
              onClick={() => setIsZoom(false)}
            >
              ✕
            </button>
          </div>
        </div>
  )
}

export default ImagePreview
