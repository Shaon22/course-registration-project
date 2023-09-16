import CartItem from "../CartItem/Cartitem";



const CartItems = ({cartItems,remainingCreditHr,totalPrice,totalCreditHour}) => {
    
    return (
        <div className='bg-[#FFFFFF] shadow-2xl p-3 rounded-xl w-1/4'>
             <h1 className="text-lg font-semibold text-sky-400 border-b-2 mb-4 pb-2">Credit hour remaining {remainingCreditHr} hr</h1>
             <h1 className="text-lg font-semibold text-[#1C1B1B]  pb-2">Course Name</h1>
            
           <ol>
           {
            cartItems.map(cartItem=><CartItem key={CartItems.idx} cartItem={cartItem} totalPrice={totalPrice} totalCreditHour={totalCreditHour}></CartItem>)
            }
           </ol>
           <h1 className="text-lg font-semibold text-[#1C1B1B] border-b-2 border-t-2 py-2 my-4"  >Total credit hr: {totalCreditHour}</h1>
        </div>
    );
};

export default CartItems;