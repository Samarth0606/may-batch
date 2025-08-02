import React from "react";
import Counter from "./components/Counter";

export default class App extends React.Component{

  constructor(){
    super();
    this.state = {
      count:0,
    }
  }
  componentDidMount(){
    console.log("component did mount");
  }
  decrease(){
    this.setState({count:this.state.count-1})
  }
  componentWillUnmount(){
    console.log("component will unmount");
  }
  render(){
    return(
      <div>
        <h1>Hi</h1>
        <Counter count={this.state.count} />
        <button onClick={this.decrease.bind(this)} >Dec</button>
      </div>
    )
  }
}



// 1. ComponentDidMount (rendered for the first time)
// 2. ComponentDidUpdate
// 3. ComponentWillUnmount
