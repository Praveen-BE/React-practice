import { useState } from "react";
import ItemList from "./ItemList";
import Shimmer from "./Shimmer";

const MenuCatagories =(props)=>{
    const [clickCount, setClickCount]=useState(1);
    const { catagoryData, show, setShowIndex, nullIndex } = props;
    // console.log(catagoryData);
    const showItem = show;
    // if(catagoryData.length==0){
    //     return(
    //         <Shimmer/>
    //     );
    // }

    const handleClick=()=>{
        setClickCount(clickCount+1);
        // console.log(clickCount);
        if(clickCount%2!=0){
            setShowIndex();
        } else {
            nullIndex();
        }

    }

    return(
        <div>
            <div>
                <button data-testid="accordian-btn" className="px-4 flex justify-between bg-green-300 w-full hover:bg-green-200"
                 onClick={handleClick}>
                    <h1 className="text-left text-lg font-bold">{catagoryData?.title}</h1>
                    <h1 data-testid="accord-symbol">{showItem?"🔽":"🔼"}</h1>
                </button>
                { showItem && <ItemList itemsData={catagoryData?.itemCards} setClickCount={setClickCount}/> }
            </div>
        </div>
    );
    

}

export default MenuCatagories;