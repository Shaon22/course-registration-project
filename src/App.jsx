import { useState } from "react"
import Courses from "./assets/Components/Courses/Courses"
import CartItems from "./assets/Components/CartItems/CartItems"
import swal from 'sweetalert';


function App() {
  const [cartItems,setCartItems]=useState([])
const handleSelect=course=>{
  const exist=cartItems.find((item)=>item.id==course.id)
  if(exist){
    swal("Sorry", "You already added this course", "error");
  }
  else{
    const newCartItems=[...cartItems,course]
  setCartItems(newCartItems)
  }
} 
  return (
   
    <>
    <h1 className="text-3xl font-bold text-center">Course Registration</h1>
      <div className="flex gap-5 p-10">
      <Courses handleSelect={handleSelect}></Courses>
      <CartItems cartItems={cartItems}></CartItems>
      </div>
    </>
  )
}

export default App
