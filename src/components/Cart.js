import { useSelector, useDispatch } from "react-redux";
import Items, { RemoveItemDish } from "./Items";
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const RemoveItemCart = RemoveItemDish(Items);
    if(cartItems.length==0){
        return(
            <div>
                <h1 data-testid="empty-cart" className="text-center font-bold">Add Cart Items</h1>
            </div>
        );
    }

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return(
        <div className="text-center">
            <button data-testid="clear-cart" className="p-3 text-center bg-red-500 rounded-md"
            onClick={handleClearCart}
            >Clear Cart</button>
            <div>
            {
                cartItems.map((items)=>
                    <RemoveItemCart key={items?.id} itemdata={items}/>  
                )
            }
            </div>
        </div>
    );
}

export default Cart;