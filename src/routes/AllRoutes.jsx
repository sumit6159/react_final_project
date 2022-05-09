import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../components/Detail'
import Home from '../components/Home'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail' element={<Detail/>}/>
    </Routes>
  )
}

export default AllRoutes