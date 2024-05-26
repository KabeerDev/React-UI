import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Action from './action'

const Actions = () => {
    const [activeIndex, setActiveIndex] = useState(1)
    const acctionsRef = useRef(null);
  
  useEffect(() => {
    const container = acctionsRef.current;

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
    <div className='action-container' ref={acctionsRef}>
      <Action title={"SIMPLE"} isActive={activeIndex === 0} onClick={()=>{handleClick(0)}} />
      <Action title={"FX"} isActive={activeIndex === 1} onClick={()=>{handleClick(1)}} />
      <Action title={"B&W"} isActive={activeIndex === 2} onClick={()=>{handleClick(2)}} />
      <Action title={"BLUR"} isActive={activeIndex === 3} onClick={()=>{handleClick(3)}} />
      <Action title={"AI"} isActive={activeIndex === 4} onClick={()=>{handleClick(4)}} />
      <Action title={"COLORS"} isActive={activeIndex === 5} onClick={()=>{handleClick(5)}} />
      <Action title={"SIMPLE"} isActive={activeIndex === 6} onClick={()=>{handleClick(6)}} />
      <Action title={"FX"} isActive={activeIndex === 7} onClick={()=>{handleClick(7)}} />
      <Action title={"B&W"} isActive={activeIndex === 8} onClick={()=>{handleClick(8)}} />
      <Action title={"BLUR"} isActive={activeIndex === 9} onClick={()=>{handleClick(9)}} />
      <Action title={"AI"} isActive={activeIndex === 10} onClick={()=>{handleClick(10)}} />
      <Action title={"COLORS"} isActive={activeIndex === 11} onClick={()=>{handleClick(11)}} />
      <Action title={"SIMPLE"} isActive={activeIndex === 12} onClick={()=>{handleClick(12)}} />
      <Action title={"FX"} isActive={activeIndex === 13} onClick={()=>{handleClick(13)}} />
      <Action title={"B&W"} isActive={activeIndex === 14} onClick={()=>{handleClick(14)}} />
      <Action title={"BLUR"} isActive={activeIndex === 15} onClick={()=>{handleClick(15)}} />
      <Action title={"AI"} isActive={activeIndex === 16} onClick={()=>{handleClick(16)}} />
      <Action title={"COLORS"} isActive={activeIndex === 17} onClick={()=>{handleClick(17)}} />
      <Action title={"BLUR"} isActive={activeIndex === 18} onClick={()=>{handleClick(18)}} />
      <Action title={"AI"} isActive={activeIndex === 19} onClick={()=>{handleClick(19)}} />
      <Action title={"COLORS"} isActive={activeIndex === 20} onClick={()=>{handleClick(20)}} />
    </div>
  )
}

export default Actions
