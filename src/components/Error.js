import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err = useRouteError();
    // console.log(err);
    return(
        <div className="font-bold text-[50px]">
            Opps Something Wrong!🥺
            <h1>{err.status} : {err.statusText}</h1>
        </div>
    );
}

export default Error;