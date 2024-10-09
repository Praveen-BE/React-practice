import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);
        // console.log(props);
        this.state={
            count: 0,
            count2: 2,
            bored: "Hello",
        }
        // console.log("Child Constructor "+this.props.name);
    }
    // put async for API call
    async componentDidMount(){
        // debugger;
        // const data = await fetch("https://bored-api.appbrewery.com/activity/3943506");
        // const json = await data.json();
        // // console.log(json.activity);
        // this.setState({
        //     bored: json.activity,
        // });
        // console.log("Child Did Mount "+this.props.name);
        // this.timer = setInterval(()=>{
            // console.log("Rocket🚀");
        // },1000);

    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.count!=prevState.count){
            console.log("Count 1 Do Something");
        }
        if(this.state.count2!=prevState.count2){
            console.log("Count 2 Do Something Not Same");
        }
        // console.log("Component Did Update");
    }

    componentWillUnmount(){
        // clearInterval(this.timer);
        // console.log("Component Will Unmount");
    }

    render(){
        // console.log("Child Render "+this.props.name);
        const { count, count2} = this.state;
        const { name } = this.props;
        return(
            <div>
                <h2>Name: { name }</h2>
                <h2>Bored: { this.state.bored }</h2>
                <>Count: {count}</><br/>
                <>Count: {count2}</><br/>
                <button className="p-1 bg-green-500"
                onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                        // count2: this.state.count2+1,
                    })
                    // console.log("click")
                }}
                >Increase1</button><br/>
                <button className="p-1 bg-green-500"
                onClick={()=>{
                    this.setState({
                        // count: this.state.count+1,
                        count2: this.state.count2+1,
                    })
                    // console.log("click")
                }}
                >Increase2</button>
                <h2>Location: Ariyalur</h2>
                <h2>contact: xyz@gmail.com</h2>
            </div>
        )
    }
}

export default UserClass;