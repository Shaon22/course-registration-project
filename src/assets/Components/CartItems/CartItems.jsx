import CartItem from "../CartItem/Cartitem";



const CartItems = ({cartItems}) => {
    
    return (
        <div className='bg-[#FFFFFF] shadow-2xl p-3 rounded-xl w-1/4'>
             <h1 className="text-lg font-semibold text-sky-400 border-b-2">Credit hour remaining</h1>
             <h1 className="text-lg font-semibold text-[#1C1B1B] border-b-2">Course Name</h1>

            {
            cartItems.map(cartItem=><CartItem key={CartItems.idx} cartItem={cartItem}></CartItem>)
            }
        </div>
    );
};

export default CartItems;