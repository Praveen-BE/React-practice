import { useState, useEffect } from "react";
import { SWIGGY_RESLIST_LINK } from "./constant";


const useBodyResListAPI =(setTopRatedRest, setlistofRestaurant)=>{
    // const [json, setJson] = useState([]);

    useEffect(()=>{
        restaurantListAPI();
    },[]);

    const restaurantListAPI = async()=>{
        const restadata = await fetch(SWIGGY_RESLIST_LINK);
        // console.log(restadata);
        const json = await restadata.json();
        // console.log(json);
        const data = json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(data);
        setTopRatedRest(data);
        setlistofRestaurant(data);

        // setJson(jsonData);
        // setlistofRestaurant((prevDatas)=>[...prevDatas, ...data]);
    }

    // return json;
}

export default useBodyResListAPI;

const header = {
    
}