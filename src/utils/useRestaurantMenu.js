import { useState, useEffect } from "react";
import { SWIGGY_MENU_API } from "./constant";

const useRestaurantMenu = (resId, setMenuInfo)=>{
    // const [resInfo , setResInfo]=useState(null);

    useEffect(()=>{
        restarantMenuListAPI();
    },[]);

    const restarantMenuListAPI= async()=>{
        // console.log(SWIGGY_MENU_API);
        // console.log(resId?.id);
        const data = await fetch(SWIGGY_MENU_API+resId?.id);
        const json = await data.json();
        // console.log("MEnu API");
        // console.log(json.data);
        setMenuInfo(json);
    }
}

export default useRestaurantMenu;