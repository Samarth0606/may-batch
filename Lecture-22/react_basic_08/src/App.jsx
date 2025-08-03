import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import Dashboard from "./components/Dashboard";
const Dashboard = React.lazy(()=>import("./components/Dashboard"))


// import Admin from "./components/Admin";
const Admin = lazy(()=> import("./components/Admin"))

function App(){
  return(
    <div>
      <h1>Hello from h1</h1>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={ <Suspense fallback="LOADING1..."> <Dashboard/> </Suspense> } path="/dashboard" />
        <Route element={<Suspense fallback="LOADING2..."> <Admin/> </Suspense>} path="/admin" />
      </Routes>
    </div>
  )
}

export default App;