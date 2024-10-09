import { useContext, useEffect } from "react";
import User from "./User";
import userContext from "../utils/userContext";
const Contact=()=>{
    // console.log("Parent Function Render");
    const { loggedInUser }= useContext(userContext);

    useEffect(()=>{
        // console.log("Parent useEffect Called");
    });

    return(
        <div className="text-[30px]">
            <h1>Contact Me</h1>
            <h1>Don't Call This Number This is Dummy 😁 1234567890</h1>
            <User name={loggedInUser}/>
            {/* <User name={"Praveen Function 2"}/> */}
        </div>
    );
}

export default Contact;