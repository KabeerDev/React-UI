import { useState, useEffect, useRef } from 'react'
import './App.css'
import Container from './components/container'
import Actions from './components/actions-container';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
     navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    }).then(stream=>videoRef.current.srcObject=stream).catch(err=>console.log("Error: ", err))
  }, [])
  

  return (
    <>
      <div className='main'>
        <button className='back'><img src="./img/back.svg" alt="back icon" width={17} />Back</button>
        <div className='imagePreview'>
          <video className='userVid' ref={videoRef} src="" autoPlay type="video/mp4"></video>
        </div>
        <Container />
        <Actions />
      </div>
    </>
  )
}

export default App
