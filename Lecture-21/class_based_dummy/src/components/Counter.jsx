import React from "react";

export default class Counter extends React.Component{
    componentDidUpdate(prevProp,prevState){
        if(this.props.count !== prevProp.count){
            console.log("I am updated");
        }
    }
    render(){
        return(
            <div>
                <h1> { this.props.count } </h1>
            </div>
        )
    }
}




