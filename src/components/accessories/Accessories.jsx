import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { apiGetAccessory } from '../../redux/accessory/action'

const Accessories = () => {
    const dispatch = useDispatch()
    const {accessory, loading} = useSelector((store)=>store.accessory)
    console.log(accessory)
    useEffect(()=>{
        dispatch(apiGetAccessory())
    },[dispatch])
  return (
    <>
    {
         accessory.map((e)=>(
           <div key={e.id}>
             <img src={e.img}  alt="photo" />
             <h1>{e.model}</h1>
             <p>price:{e.price}</p>
           </div>
         ))
       }
    </>
  )
}

export default Accessories