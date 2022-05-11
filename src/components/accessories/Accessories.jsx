import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { apiGetAccessory } from '../../redux/accessory/action'
import { Link } from 'react-router-dom'

const Accessories = () => {
    const dispatch = useDispatch()
    const {accessory, loading} = useSelector((store)=>store.accessory)
   // console.log(accessory)
    useEffect(()=>{
        dispatch(apiGetAccessory())
    },[dispatch])
  return (
    <>
    {
         accessory.map((e)=>(
           <div key={e.id}>
             <Link to={`/ProductDetails/${e.id}`}>
             <img src={e.img}lt="headphone" />
             </Link>
             <h1>{e.model}</h1>
             <p>price:{e.price}</p>
           </div>
         ))
       }
    </>
  )
}

export default Accessories