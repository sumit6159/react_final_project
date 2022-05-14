import React from 'react'
import './mobile.css'
import { useEffect } from 'react'
//import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { apiGetData } from '../../redux/mobile/action'
import { Link } from 'react-router-dom'




const Mobile = () => {

  const cardItem=(item)=>{
      return(
        <div className="card my-5 py-4" key={item.id} style={{width:'18rem'}}>
  <img src={item.img} className="card-img-top" alt={item.titles} height='60%'/>
  <div className="card-body text-center">
    <h5 className="card-title">{item.titles}</h5>
    <p className="card-text">price:₹{item.price}</p>
    <p className="card-text">color:{item.color}</p>
    <Link to={`/mobileDetail/${item.id}`} className="btn btn-outline-primary">Buy Now</Link>
  </div>
</div>
      )
  }
    const dispatch = useDispatch()
    const {data}= useSelector((store)=>store.data)
    //console.log(data[0])

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