import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../components/Detail'
import Home from '../components/Home'
import ProductDetails from '../components/ProductDetails/ProductDetails'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
    </Routes>
  )
}

export default AllRoutes