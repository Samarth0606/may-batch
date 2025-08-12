import Child1 from "./components/Child1";
import Parent from "./components/Parent";
import PropDrilling from "./components/PropDrilling";

function App(){

  // let data = 50;

  return(
    <div>
      <h1>hello from h1</h1>
      {/* <Child1 students={data} /> */}
      {/* <PropDrilling /> */}
      <Parent />
    </div>
  )
}

export default App;