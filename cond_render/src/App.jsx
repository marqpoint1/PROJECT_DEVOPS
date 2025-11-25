
import Conditional_login from './Components/Conditional_login'
import Logout from './Components/Logout'
import './App.css'
import { useState } from 'react'
function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      
    <div>using if else</div>
    <div> {isLogin ? <Conditional_login /> : <Logout />}</div>
   
     

    </div>

    
  )
}

export default App
