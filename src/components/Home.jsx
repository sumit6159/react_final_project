import React, { useState,useEffect } from 'react'
//import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { apiGetData } from '../redux/action'
import "./home.css"

const Home = () => {
 //const [item, setItem]= useState([])
 const dispatch = useDispatch()
 const {data, loading} = useSelector((store)=>store.data)

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //   .then(res=>res.json())
  //   .then((result)=>{setItem([...result])})
            
  // }, [])
  useEffect(()=>{
    dispatch(apiGetData())
  }, [dispatch])
  
  return (
    <>
     <div className='parentContainer'>
     {
         data.map((e)=>(
           <div key={e.id}>
             <img src={e.img}  alt="photo" />
             <h1>{e.pattern_name}</h1>
             <p>price:{e.price}</p>
           </div>
         ))
       }
     </div>
    </>
  )
}

export default Home