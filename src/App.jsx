import { useState } from 'react'
import './App.css'
import Container from './components/container'
import Actions from './components/actions-container';

function App() {

  return (
    <>
      <div className='main'>
        <button className='back'><img src="./img/back.svg" alt="back icon" width={17} />Back</button>
        <div className='imagePreview'>
          <img src="./img/dummy.jpg" alt="dummy image" />
        </div>
        <Container />
        <Actions />
      </div>
    </>
  )
}

export default App
