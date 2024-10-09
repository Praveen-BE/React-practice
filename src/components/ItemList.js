
import { useEffect } from "react";
import Items, { AddItemDish } from "./Items";

const ItemList =({itemsData, setClickCount})=>{
    // console.log(itemsData);
    const AddItemCard = AddItemDish(Items);

    // console.log(name);
    useEffect(()=>{
        return ()=>{
            setClickCount(1);
        }
    });
    return(
        <div className="relative">
        { itemsData.map((data)=> <AddItemCard key={data?.card?.info?.id} itemdata={data?.card?.info}/>)}
        </div>
    );
}

export default ItemList;