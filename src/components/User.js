import { useEffect, useState } from "react";

const User =(props)=>{
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const { name } = props;
    // console.log("Child Function Render "+name);

    useEffect(()=>{
        // console.log("Count 1 Update So Do Somethinng");

        // console.log("Child UseEffect Called "+name);
        // const timer = setInterval(()=>{
        //     console.log("useEffect Interval🚀");
        // },1000);

        // return ()=>{
        //     clearInterval(timer);
        // }
    },[count1, count2]);
    // useEffect(()=>{
    //     console.log("Count 2 Update So Do Somethinng Not Same");
    // },[count2]);
    // useEffect(()=>{
    //     console.log("Count 1,2 Update So Do Somethinng Not Same the above");
    // },[count2, count1]);

    return (
        <div>
            <h2>Name: {name}</h2>
            <h2 data-testid="userValue1">{count1}</h2>
            <h2 data-testid="userValue2">{count2}</h2>
            <h2>Location: Ariyalur</h2>
            <h2>contact: xyz@gmail.com</h2>
            <button data-testid="count+1" className="m-4 p-1 bg-green-500" onClick={()=>{
                   setCount1(count1+1);
                }}
                >Increase Count1</button> <br/>
            <button data-testid="count+2" className="m-4 p-1 bg-green-500" onClick={()=>{
                   setCount2(count2+1);
                }}
                >Increase Count2</button> <br/>
            <button data-testid="count-12" className="m-4 p-1 bg-green-500" onClick={()=>{
                    setCount1(count1-1);
                   setCount2(count2-1);
                }}
                >Decrease Count1 and Count2</button> <br/>
        </div>
    );
}

export default User;