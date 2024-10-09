import React from 'react';
import { CDN_REST_IMAGE, NotFount } from "../utils/constant";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';

const Items = (props) => {
const { itemdata } = props;
// console.log(itemdata);
const { id, name, defaultPrice, category, ratings, price, imageId } = itemdata;
  return (
    <div>
        <div className="pl-4 w-full h-40 border-4 border-solid border-green-50 flex justify-center items-center hover:border-green-200">
            <div className="flex w-full justify-center items-center">
            <div className="w-9/12">
                <h1 className="font-bold">{ name }</h1>
                <h1>Rs.{defaultPrice/100 || price/100 }</h1>
                <h1>{category}</h1>
                <h1> ⭐{ratings?.aggregatedRating?.rating || "No Rating"}</h1>
            </div>
            <div className="w-3/12 overflow-hidden relative">
                <div className="w-[9rem] h-[9rem] overflow-hidden">
                    <img className="w-36 rounded-lg hover:drop-shadow-md hover:border-4" alt={"image for "+name} src={ imageId ? CDN_REST_IMAGE+imageId : NotFount}/>
                </div>

            </div>
            </div>
        </div>
    </div>
  )
}

export default Items;

export const AddItemDish = (Items)=>{
    return (props)=>{
        const { itemdata } = props;
        const { id, name, defaultPrice, category, ratings, price, imageId } = itemdata;
        const dispatch = useDispatch();
        const handleAddItem =()=>{
            dispatch(addItem({
                id: id,
                name: name,
                defaultPrice: defaultPrice,
                category: category,
                ratings: ratings,
                price: price,
                imageId: imageId,
            }));
        }
       return(
        <div className="relative">
                <button data-testid="add-cart" className="w-14 p-2 absolute rounded-md bg-black
                 text-white top-14 right-0 z-10 border-black
                  hover:drop-shadow-md hover:border-4"
                    onClick={handleAddItem}
                  >Add+</button>
            <Items {...props}/>
        </div>
       ); 
    };
}

export const RemoveItemDish = (Items)=>{
    return (props)=>{
        const { itemdata } = props;
        const { id, name, defaultPrice, category, ratings, price, imageId } = itemdata;
        const dispatch = useDispatch();
        const cartItems = useSelector((store)=>store.cart.items);
        // console.log(cartItems);
        const handleRemoveItem =()=>{
            const index = cartItems.findIndex((item)=>item?.id==id);
            // console.log(index);
            dispatch(removeItem(index));
        }
       return(
        <div className="w-full flex justify-center">
        <div className="relative w-6/12">
                <button data-testid="remove-cart" className="w-14 p-2 absolute rounded-md bg-black
                 text-white top-14 right-0 z-10 border-black
                  hover:drop-shadow-md hover:border-4"
                    onClick={handleRemoveItem}
                  >Remove-</button>
            <Items {...props}/>
        </div>
        </div>
       ); 
    };
} 