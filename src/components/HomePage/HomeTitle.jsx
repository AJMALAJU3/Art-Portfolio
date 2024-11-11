import React, { useEffect, useState } from 'react';

function HomeTitle() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsMounted(false);
            setIsMounted(true);
        }, 1000);
    }, []);

    return (
        <div className='flex flex-col items-center justify-center mb-12 md:mb-16 z-10'>
            <div className={`max-w-xl ${isMounted ? 'opacity-100' : 'opacity-0 w-0'} duration-1000 transition-all ease-in-out`}>
                <p className='md:text-[3rem] text-[1.6rem] text-center font-extrabold mx-2 m-2'>
                    {['Welcome,', 'to', 'my', 'art', 'studio'].map((text, index) => (
                        <span 
                            key={index} 
                            className={`bg-gradient-to-tr from-black to-pink-700 text-transparent bg-clip-text 
                            hover:from-pink-700 hover:to-black 
                            transition-all duration-500 ease-in-out`}
                            style={{transitionDelay: `${index * 100}ms`}} // Slight delay between each word for smoother flow
                        >
                            {text}{' '}
                        </span>
                    ))}
                </p>
                <p className='text-center text-[0.7rem] md:text-[1rem] px-14'>
                    Be the first to know about my upcoming exhibitions, new projects, and art releases. Join my community for exclusive insights.
                </p>
            </div>
        </div>
    );
}

export default HomeTitle;
