import React from 'react'
import './usedcard.css'
const Usercard = (props) => {
  return (
    <div className='user-container'>
         
      <p>
        hi i am a {props.name} card 
        hi how are you {props.gender}
        </p>
    </div>
    
  )
}

export default Usercard