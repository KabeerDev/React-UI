import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Box from './box';

const Container = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const containerRef = useRef(null);
  
    useEffect(() => {
      const container = containerRef.current;
  
      const handleWheel = (event) => {
        if (event.deltaY !== 0) {
          event.preventDefault();
          container.scrollLeft += event.deltaY;
        }
      };
  
      container.addEventListener('wheel', handleWheel);
  
      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }, []);

    const handleClick = (index) => {
        setActiveIndex(index)
    }
  
    return (
      <div className="container" ref={containerRef}>
        <Box title={"None"} isActive={activeIndex === 0} onClick={()=>{handleClick(0)}} />
        <Box title={"HDR 1"} isActive={activeIndex === 1} onClick={()=>{handleClick(1)}} />
        <Box title={"Noise"} isActive={activeIndex === 2} onClick={()=>{handleClick(2)}} />
        <Box title={"Sharpen"} isActive={activeIndex === 3} onClick={()=>{handleClick(3)}} />
        <Box title={"None"} isActive={activeIndex === 4} onClick={()=>{handleClick(4)}} />
        <Box title={"HDR 1"} isActive={activeIndex === 5} onClick={()=>{handleClick(5)}} />
        <Box title={"Noise"} isActive={activeIndex === 6} onClick={()=>{handleClick(6)}} />
        <Box title={"Sharpen"} isActive={activeIndex === 7} onClick={()=>{handleClick(7)}} />
        <Box title={"Film"} isActive={activeIndex === 8} onClick={()=>{handleClick(8)}} />
        <Box title={"Film"} isActive={activeIndex === 9} onClick={()=>{handleClick(9)}} />
        <Box title={"HDR 1"} isActive={activeIndex === 10} onClick={()=>{handleClick(10)}} />
        <Box title={"Noise"} isActive={activeIndex === 11} onClick={()=>{handleClick(11)}} />
        <Box title={"Sharpen"} isActive={activeIndex === 12} onClick={()=>{handleClick(12)}} />
        <Box title={"Film"} isActive={activeIndex === 13} onClick={()=>{handleClick(13)}} />
        <Box title={"Film"} isActive={activeIndex === 14} onClick={()=>{handleClick(14)}} />
      </div>
    );
  };

export default Container
