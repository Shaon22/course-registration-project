import { useState } from "react"
import Courses from "./assets/Components/Courses/Courses"
import CartItems from "./assets/Components/CartItems/CartItems"
import swal from 'sweetalert';


function App() {
  const [cartItems,setCartItems]=useState([])
  const [remainingCreditHr,setRemainingCreditHr]=useState(20)
  const [totalPrice,setTotalPrice]=useState(0)
const handleSelect=course=>{
  const exist=cartItems.find((item)=>item.id==course.id)
  let count=course.credit_hr
  let priceCount=course.price
  if(exist){
    swal("Sorry", "You already added this course", "error");
  }
  else{
    cartItems.forEach((item)=>{
      count +=item.credit_hr
      priceCount+=item.price
    })
    const totalRemainingCreditHr=20-count;
    if(count>20){
      swal("Sorry", "You can't buy courses more than 20 credit hr", "error");
    }
    else{
      const priceTotal=priceCount
      setTotalPrice(priceTotal)
      setRemainingCreditHr(totalRemainingCreditHr)
      const newCartItems=[...cartItems,course]
    setCartItems(newCartItems)
    }
    
  }
} 
  return (
   
    <>
    <h1 className="text-3xl font-bold text-center">Course Registration</h1>
      <div className="flex gap-5 p-10">
      <Courses handleSelect={handleSelect}></Courses>
      <CartItems cartItems={cartItems} remainingCreditHr={remainingCreditHr} totalPrice={totalPrice}></CartItems>
      </div>
      <h1>vag</h1>
    </>
  )
}

export default App
