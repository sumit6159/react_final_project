import React from 'react'
import './mobile.css'
import { useState,useEffect } from 'react'
//import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { apiGetData } from '../../redux/mobile/action'
import { Link } from 'react-router-dom'




const Mobile = () => {

  const cardItem=(item)=>{
      return(
        <div class="card my-5 py-4" key={item.id} style={{width:'18rem'}}>
  <img src={item.img} class="card-img-top" alt={item.pattern_name}/>
  <div class="card-body text-center">
    <h5 class="card-title">{item.pattern_name}</h5>
    <p class="card-text">price:₹{item.price}</p>
    <p class="card-text">color:{item.color}</p>
    <Link to={`/mobileDetail/${item.id}`} class="btn btn-outline-primary">Buy Now</Link>
  </div>
</div>
      )
  }
    const dispatch = useDispatch()
    const {data, loading}= useSelector((store)=>store.data)
    //console.log(data)

    useEffect(()=>{
        dispatch(apiGetData())
    }, [dispatch])
  return (
    <>
     {/* {
         data.map((e)=>(
           <div key={e.id}>
             <Link to={`/mobileDetail/${e.id}`}>
             <img src={e.img} alt="mobile" />
             </Link>
             <h1>{e.pattern_name}</h1>
             <p>price:₹{e.price}</p>
           </div>
         ))
       } */}
       <div className="container py-5">
         <div className="row">
           <div className="col-12 text-center">
             <h1>Mobile</h1>
             <hr />
           </div>
         </div>
       </div>
       <div className="container">
         <div className="row justify-content-around">
           {data.map(cardItem)}
         </div>
       </div>
    </>
  )
}

export default Mobile