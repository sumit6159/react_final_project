import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { apigetDetailsAccess, apigetDetailsmobile } from '../../redux/details/action'


const ProductDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {addressDetails, loading} = useSelector((store)=> store.details);
    console.log(addressDetails)

    useEffect(() => {
        dispatch(apigetDetailsAccess(id)) || dispatch(apigetDetailsmobile(id)) 
      }, [])
  return (
    <div>
        <img src={addressDetails.img} alt="" />
    </div>
  )
}

export default ProductDetails