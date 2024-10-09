import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { Component } from "react";
import userContext from "../utils/userContext";
class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parend Did Mount");
    }

    render(){
        console.log("Parent Render");
        return(

            <div className="text-[30px] mx-40">
                            <userContext.Consumer>
                {({loggedInUser})=>(<h1>{loggedInUser}</h1>)}
                </userContext.Consumer>
                <h1 className="font-bold">About</h1>
               
                <UserClass name={"hello"}/>
                {/* <UserClass name={"Praveen Class 2"}/> */}
         
            </div>
            
        );           
    }
}

export default About;