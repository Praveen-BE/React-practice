import { useGetRandomDataQuery } from "../utils/apiSlice";
import Shimmer from "./Shimmer";

const Grocery =()=>{
    const {data, isError, isLoading } = useGetRandomDataQuery();
    console.log(data);

    if(isError){
        return(
            <div>
                Ooops Noooooooooooooooo🥺🥺🥺🥺🥺🥺🥺🥺🥺
            </div>
        );
    }
    if(isLoading){
        return(
            <div>
                <Shimmer/>
            </div>
        );
    }

    return(
        <div>
            <h1 className="font-bold text-2xl">{data.activity}</h1>
            <h1>{data.type}</h1>
            <h1>Big library</h1>
            <img className="w-80" alt="image" src="https://images.unsplash.com/photo-1720247522770-5d0e62edf619?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <div>
                
            </div>
        </div>
    );
}

export default Grocery;