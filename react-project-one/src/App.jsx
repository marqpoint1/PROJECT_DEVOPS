import { useState } from 'react'
import './App.css'
import Usercard from './components/usercard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "learning">
    <Usercard name = "adit" gender = "male" image = "./hard_hat_workers364.png" />
    <Usercard name = "bansal"/> 
    <Usercard name = "tiet"/>
    </div>
  )
}

export default App
