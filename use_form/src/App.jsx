import { useState  } from 'react'
import { useForm } from 'react-hook-form'

import './App.css'
function App() {

  const onSubmit = (data) => {
    console.log(data)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
     <form onSubmit={handleSubmit(onSubmit)}>
       
       <label>Name</label>
       <input type="text"  {...register("name" ,
         {required : {value : true , message : "Name is required"} ,
          minLength : {value : 3 , message : "Name must be at least 3 characters long"},
          pattern : {value : /^[a-zA-Z ]+$/ , message : "Name must contain only alphabets"}
         }
         )}/>
         {errors.name && <p>{errors.name.message}</p>}
        
       
       
       <br/>

       <label>Age</label>
       <input type="number" {...register("age" , {required : true , minLength : 8})}/>

       <br/>  

       <button type="submit">Submit</button>

     </form>
    </>
  )
}
export default App
