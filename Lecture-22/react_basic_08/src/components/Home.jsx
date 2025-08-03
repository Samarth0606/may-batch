import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();

    function handleDashboard(){
        // task1 task2 task 3
        navigate('/dashboard')
    }
    function handleAdmin(){
        navigate('/admin')
    }

  return (
    <div>
        <h1>Home</h1>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/admin">Admin</Link>

        <button onClick={handleDashboard} >Dashboard</button>
        <button onClick={handleAdmin} >Admin</button>
    </div>
  )
}

export default Home