import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Users from '../Pages/Users'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes