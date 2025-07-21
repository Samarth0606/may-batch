import Mentor from "./components/Mentor";
import Student from "./components/Student";

function App(){
  return(
    <div>
      <h1>Hello</h1>
      <Mentor name="samarth" />
      <Student naam={ ["bhushan "," krishn"] } />

      <Mentor name="anshika"/>
      <Student naam={ ["anshu"] }/>
    </div>
  )
}


export default App;