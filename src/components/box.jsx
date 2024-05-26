import React from 'react'

const box = ({title, isActive, onClick}) => {
  return (
    <button className={`box ${isActive?"active":""}`} onClick={onClick}>
      <img src="./img/dummy.jpg" alt="dummy image" />
      <span className='title'>{title}</span>
    </button>
  )
}

export default box
