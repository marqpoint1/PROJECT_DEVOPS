import React from 'react'
import { useContext } from 'react'
import { userContext } from './APP1'


const CHILDC3 = () => {
    const newCount = useContext(userContext)
  
  return (
    <div>
       {newCount}
    </div>
  )
}

export default CHILDC3