import React from 'react'

const Action = ({title, isActive, onClick}) => {
  return (
    <button className={`action ${isActive?'active-option':""}`} onClick={onClick}>
      {title}
    </button>
  )
}

export default Action
