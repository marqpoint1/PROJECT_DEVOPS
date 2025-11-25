import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <h1 className='learn'> hello {props.name}</h1>
      {props.children}
      <div>{props.children}</div>
    </div>
  )
}

export default Card