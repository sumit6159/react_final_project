import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Accessories from '../components/accessories/Accessories'
import About from '../components/About'
import Home from '../components/Home'
import Mobile from '../components/mobiles/Mobile'
import AccessoryDetail from '../components/ProductDetails/AccessoryDetail'
import MobileDetail from '../components/ProductDetails/MobileDetail'
import Login from '../buttons/Login'
import Signup from '../buttons/Signup'
import Cart from '../buttons/Cart'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/mobile' element={<Mobile/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/accessory' element={<Accessories/>}/>
      <Route path='/ProductDetails/:id' element={<AccessoryDetail/>}/>
      <Route path='/mobileDetail/:id' element={<MobileDetail/>}/>
    </Routes>
  )
}

export default AllRoutes