import React from 'react'












const Button = (props) => {
  return (
    <div>
    {props.children}
    <button onClick={props.counter}>{props.count}</button>

    </div>
  )
}

export default Button