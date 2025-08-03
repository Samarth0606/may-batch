import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";

function App(){
  return(
    <div>
      <h1>Hello from h1</h1>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<Admin />} path="/admin" />
      </Routes>
    </div>
  )
}

export default App;