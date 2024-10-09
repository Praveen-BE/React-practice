import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import MenuCatagories from "./MenuCatagories";
import { MdRecommend } from "react-icons/md";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu =()=>{
    const [menuInfo, setMenuInfo] = useState(null);
    const [showIndex, setShowIndex] = useState(null);
    const resId = useParams();
    
    useRestaurantMenu(resId, setMenuInfo);
        // console.log(menuInfo);

        if(menuInfo==null){
            return(
                <ShimmerMenu/>
            );
        }
        const { name, city, cuisines, costForTwo}  = menuInfo?.data?.cards[2]?.card?.card?.info;
        const itemCards = menuInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
                            menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        // console.log(itemCards);
        const itemCatogry = itemCards.filter((catagory)=>catagory?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        // console.log(itemCatogry);

    return(
        <div className="m-4 flex justify-center">
            <div className="w-6/12 bg-green-100">
                <h1 className="font-bold text-[30px] text-center">{ name }</h1>
                <h1 className="text-lg text-center">Location- { city }</h1>
                {/* <h1 className="text-lg text-center">{ cuisines.join(", ") }</h1> */}
                <h1 className="text-lg text-center">Rs.{ costForTwo/100 }</h1>
                <div>
                    { itemCatogry.map((data, index)=>
                        <MenuCatagories
                        key={data?.card?.card?.title}
                        catagoryData={data?.card?.card} 
                        show={index==showIndex?true:false}
                        setShowIndex={()=>setShowIndex(index)}
                        nullIndex={()=>setShowIndex(null)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;