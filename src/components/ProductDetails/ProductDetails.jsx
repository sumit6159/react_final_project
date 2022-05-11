import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { apigetDetailsAccess, apigetDetailsmobile } from '../../redux/details/action'


const ProductDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {Detailsmobile, Detailsaccess,loading} = useSelector((store)=> store.detail);
    //console.log(Detailsmobile)

    useEffect(() => {
        dispatch(apigetDetailsAccess(id))  
       
      }, [])

    useEffect(() => {
         
        dispatch(apigetDetailsmobile(id)) 
      }, [])
  return (
    <div>
        <img src={Detailsaccess.img} alt="" /> 
        <h1>{Detailsaccess.model}</h1>
             <p>price:{Detailsaccess.price}</p>
        

    </div>
  )
}

export default ProductDetails