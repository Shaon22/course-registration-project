

const CartItem = ({cartItem,totalPrice}) => {
    const {title}=cartItem;
    return (
        <div>
            <li className=" text-base text-gray-400 font-medium">{title}</li>
        </div>
        
    );
};

export default CartItem;