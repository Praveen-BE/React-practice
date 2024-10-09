import { CDN_REST_IMAGE } from "../utils/constant";

const RestaurantCard =(props)=>{
    const { apiResList } = props;
    // console.log(apiResList);
    const { name, cuisines, cloudinaryImageId, avgRating, sla} = apiResList?.info;
    return(
        <div className="m-[16px] w-[250px] h-[340px] overflow-hidden border border-1
         hover:bg-green-100 rounded-md shadow-md
          hover:drop-shadow-md hover:border-4">
            <div className="w-full relative h-[200px] overflow-hidden flex items-center">
                <div className="w-full absolute z-10 h-[200px] bg-gradient-to-t from-black to-[50%]"></div>
                <img className="w-full absolute h-full z-0 object-cover" 
                src={CDN_REST_IMAGE+cloudinaryImageId}
                />
            </div>
            <div className="p-2 flex flex-col">
                <h2 data-testid="restro-name" className="font-bold text-lg w-full h-6 line-clamp-1">{name}</h2>
                <h3 className="w-full h-12 line-clamp-2">{cuisines.join(", ")}</h3>
                <h3 className="w-full h-6">⭐ {avgRating}</h3>
                <h3 className="w-full h-6">{sla?.slaString}</h3>
            </div>
        </div>
    );
}

export default RestaurantCard;

export const OfferLabelCard = (RestaurantCard)=>{
    return (props)=>{
        const { apiResList } = props;
        const { header, subHeader } = apiResList?.info?.aggregatedDiscountInfoV3 || apiResList?.info?.aggregatedDiscountInfoV2;
        return(
            <div className="relative">
                    <h1 data-testid="Offer-Label" className="left-[10%] absolute top-[50%] z-20 text-xl font-extrabold
                    text-white overflow-hidden line-clamp-1 tracking-tighter uppercase">
                        {header+" "+subHeader}
                    </h1>
                <RestaurantCard {...props}/>
            </div>
        );
    }

}