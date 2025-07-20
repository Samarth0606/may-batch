import Intro from "./components/Intro";
import {Person} from "./components/Person";
import Student from "./components/Student";
import Teacher from "./components/Teacher";


function App(){
  return(
    <div>
      <h1>Hello from App</h1>
      {/* <Person />
      <Person />
      <Person></Person> */}
      {/* <Intro name="Samarth"  age={21} favColor="blue"  number={100} />
      <Intro name="Kashish"  age={22} favColor="green" number={101} />
      <Intro name="Maverick" age={23} favColor="black" number={102} /> */}
      <Teacher name="Samarth" isMale={true} />
      <Teacher name="Anshika" isMale={false} />
      
      <Student name="Chandan" age={21} />
      <Student name="Ankit" age={23} />
      <Student name="Devansh" age={22} />
    </div>
  )
}

export default App;

