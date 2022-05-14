import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { apiGetAccessory } from '../../redux/accessory/action'
import { Link } from 'react-router-dom'
import './accessory.css'

const Accessories = () => {
  const cardItem=(item)=>{
    return(
      <div className="card my-5 py-4" key={item.id} style={{width:'18rem'}}>
<img src={item.img} className="card-img-top" alt={item.titles}  height='60%'/>
<div className="card-body text-center">
  <h5 className="card-title">{item.titles}</h5>
  <p className="card-text">price:₹{item.price}</p>
  
  <Link to={`/ProductDetails/${item.id}`} className="btn btn-outline-primary">Buy Now</Link>
</div>
</div>
    )
}
    const dispatch = useDispatch()
    const {accessory, loading} = useSelector((store)=>store.accessory)
  

    useEffect(()=>{
        dispatch(apiGetAccessory())
    },[dispatch])
  return (
    <>
    {/* {
         accessory.map((e)=>(
           <div key={e.id}>
             <Link to={`/ProductDetails/${e.id}`}>
             <img src={e.img}lt="headphone" />
             </Link>
             <h1>{e.model}</h1>
             <p>price:₹{e.price}</p>
           </div>
         ))
       } */}
        <div className="container py-5">
         <div className="row">
           <div className="col-12 text-center">
             <h1>Accessories</h1>
             <hr />
           </div>
         </div>
       </div>
       <div className="container">
         <div className="row justify-content-around">
           {accessory.map(cardItem)}
         </div>
       </div>
    </>
  )
}

export default Accessories