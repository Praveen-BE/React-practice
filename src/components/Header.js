import { useState, useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = ()=>{
    const [userStatus, setUserStatus] = useState(false);
    const onlineCheck = useOnlineStatus();
    const data = useContext(userContext);
    // console.log(data.loggedInUser);
    const { loggedInUser } = data;
    const cartItems = useSelector((store)=>store.cart.items);

    return(
        <div className="mt-0 pl-8 py-8 flex w-full h-10 bg-green-100 items-center">
            <div className="w-2/12">
            <h1>Logo</h1>
                {/* <TbBowlSpoonFilled className="hover:drop-shadow-md hover:border-4" size={"50px"} color="#FABC3F"/> */}
            </div>
            <div  className="flex w-10/12 px-5">
                <ul className="flex w-full justify-between">
                    <Link to="/"><li className="mx-2 p-3 bg-green-300 hover:bg-green-400 rounded-md hover:drop-shadow-md">Home</li></Link>
                    <Link to="/about"><li className="mx-2 p-3 bg-green-300 hover:bg-green-400 rounded-md hover:drop-shadow-md">About</li></Link>
                    <Link to="/contact"><li className="mx-2 p-3 bg-green-300 hover:bg-green-400 rounded-md hover:drop-shadow-md">Contact</li></Link>
                    <Link to="/library"><li className="mx-2 p-3 bg-green-300 hover:bg-green-400 rounded-md hover:drop-shadow-md">Grocery</li></Link>
                    <Link to="/profile"><li className="mx-2 p-3 bg-green-300 hover:bg-green-400 rounded-md hover:drop-shadow-md">{loggedInUser}</li></Link>
                    <Link to="/contact">
                        <li data-testid="On-Off-status" className="mx-2 p-3 bg-green-300 hover:bg-green-400 rounded-md hover:drop-shadow-md">
                            status { onlineCheck?"✔️":"❌" }
                        </li>
                    </Link> 
                    <Link data-testid="cart-btn" to="/cart" className="w-1/12"><li className="mx-8 w-full flex relative group">
                        <h1 data-testid="cart-count" className="left-10 top-0 absolute text-lg text-white bg-green-800 
                        w-7 h-7 text-center pb-6 rounded-[50%] z-10
                        group-hover:drop-shadow-md group-hover:border-2 group-hover:h-8">
                            {cartItems.length}</h1>
                        {/* <AiOutlineShoppingCart className="group-hover:drop-shadow-md group-hover:border-4" 
                        size={"50px"} color=""/> */}
                        Cart
                    </li></Link>
                    <button className="mx-2 p-3 bg-green-300 hover:bg-green-400 rounded-md hover:drop-shadow-md"
                    onClick={()=>
                        setUserStatus(!userStatus)
                    }
                    >{userStatus?"Logout":"Login"}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;