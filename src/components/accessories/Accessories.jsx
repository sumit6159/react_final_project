import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { apiGetAccessory } from '../../redux/accessory/action'
import { Link } from 'react-router-dom'
import './accessory.css'

const Accessories = () => {
  const cardItem=(item)=>{
    return(
      <div class="card my-5 py-4" key={item.id} style={{width:'18rem'}}>
<img src={item.img} class="card-img-top" alt={item.pattern_name}/>
<div class="card-body text-center">
  <h5 class="card-title">{item.model}</h5>
  <p class="card-text">price:₹{item.price}</p>
  
  <Link to={`/ProductDetails/${item.id}`} class="btn btn-outline-primary">Buy Now</Link>
</div>
</div>
    )
}
    const dispatch = useDispatch()
    const {accessory, loading} = useSelector((store)=>store.accessory)
   // console.log(accessory)
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