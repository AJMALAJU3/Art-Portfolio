import React,{useState,useEffect} from 'react';
import cone from '../../assets/cone.png';
import torus from '../../assets/torus.png';
import sphere from '../../assets/sphere.png';
import hedron from '../../assets/hedron.png';
import "./ShapesStyle.css";


function Shapes() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setTimeout(()=>{
            setIsMounted(false)
            setIsMounted(true);
        })
    }, []);
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0">
      <img
        src={cone}
        alt="cone"
        className={`shape cone lg:w-52 w-28 delay-0  blur-sm ${isMounted?'opacity-60':'opacity-0'} duration-300 transition-opacity ease-in`}
      />
      <img
        src={torus}
        alt="torus"
        className={`shape torus-small lg:w-44 md:w-28 w-24 ${isMounted?'opacity-60':'opacity-0'} duration-300 transition-opacity ease-in delay-0  blur-sm`}
      />
      <img
        src={sphere}
        alt="sphere"
        className={`shape sphere lg:w-44 md:w-28 w-24 ${isMounted?'opacity-60':'opacity-0'} duration-300 transition-opacity ease-in blur-sm delay-0`}
      />
      <img
        src={hedron}
        alt="hedron"
        className={`shape hedron-small lg:w-44 md:w-28 w-24 ${isMounted?'opacity-60':'opacity-0'} duration-300 transition-opacity ease-in blur-sm delay-0`}
      />
    </div>
  );
}

export default Shapes;
