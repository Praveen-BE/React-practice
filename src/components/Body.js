import { useState, useEffect } from "react";
import RestaurantCard, { OfferLabelCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useBodyResListAPI from "../utils/useBodyResListAPI.js";

const Body =()=>{
    const [topRatedRest, setTopRatedRest] = useState([]);
    const [listofRestaurant, setlistofRestaurant] = useState([]);
    const [searchInput, setSearchInput]=useState("");
    const onlineStatus = useOnlineStatus();
    useBodyResListAPI(setTopRatedRest, setlistofRestaurant);
    const OfferRestaurantCard = OfferLabelCard(RestaurantCard);

    // useEffect(()=>{
    //     apiCall();
    // },[]);

    // const apiCall = ()=>{
        
    // }
    // useEffect(()=>{
    //     handleScroll();
    // });
    // const handleScroll=()=>{
    //     if(window.innerHeight+window.scrollY >= document.body.scrollHeight){
    //         restaurantListAPI();
    //     }
    // }
    const topRatedFilter=()=>{
        const filteredRest= listofRestaurant.filter((restro)=>restro?.info?.avgRating>=4.5);
        setTopRatedRest(filteredRest);
    }
    const handleSearch=()=>{
        const searchRestarant = listofRestaurant.filter((restro)=>restro?.info?.name.toLowerCase().includes(searchInput.toLowerCase()));
        setTopRatedRest(searchRestarant);
    }
    const handleChange=(event)=>{
        setSearchInput(event.target.value);
    }

    if(!onlineStatus){
        return(
            <div data-testid="offline-box">
                <h1>Check Internet Connection 🥺</h1>
            </div>
        );
    }
    // console.log(listofRestaurant);
    if(listofRestaurant.length==0){
        return (
            <Shimmer/>
        );
    }

    return(
        <div className="mx-4">
            <div className="m-2 p-2">
                <input data-testid="search-box" onChange={handleChange} placeholder="Search Here ..." className="p-1 w-80 border border-green-500 rounded-l-md"/>
                <button className="py-1 px-4 bg-green-300 rounded-r-md hover:bg-green-100 border border-green-300"
                onClick={handleSearch}
                >Search</button>
                <button data-testid="top-rated" className="ml-4 py-1 px-4 bg-green-300 rounded-md hover:bg-green-100  border border-green-300"
                onClick={topRatedFilter}
                >Top Rated</button>
            </div>
            <div>
                <div className="flex flex-wrap">
                    {
                        topRatedRest.map(
                            (restro)=>
                                <Link to={"/restaurant/"+restro?.info?.id}
                                key={restro?.info?.id}
                                data-testid="resCard">
                                    { 
                                    (restro?.info?.aggregatedDiscountInfoV3?.header||
                                    restro?.info?.aggregatedDiscountInfoV3?.subHeader ||
                                    restro?.info?.aggregatedDiscountInfoV2?.header||
                                    restro?.info?.aggregatedDiscountInfoV2?.subHeader
                                    )?
                                        <OfferRestaurantCard apiResList={restro}/>:
                                        <RestaurantCard apiResList={ restro }/>
                                    }
                                </Link>
                            )
                    }
                </div>
          </div>
          {/* <button onClick={restaurantListAPI} className="p-4 bg-green-200">Load More</button> */}
        </div>
    );
}

export default Body;