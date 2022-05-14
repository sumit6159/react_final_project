import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { apigetDetailsAccess } from '../../redux/details/action'
import{addItem,remItem} from '../../redux/cart/action'
import './product.css'




const ProductDetails = () => {
  const [cartbtn,setCartbtn]= useState("Add to Cart")
    const {id} = useParams()
    const dispatch = useDispatch()
    const {Detailsaccess} = useSelector((store)=> store.detail);
    const {accessory, loading} = useSelector((store)=>store.accessory)
    //console.log(Detailsaccess)
    const access =  accessory.filter(x=>x.id==id)
    const prod = access[0]

    
   // console.log(prod)
  

    useEffect(() => {
        dispatch(apigetDetailsAccess(id))  
       
      }, [])

      
      const handleCart=(prod)=>{
         if(cartbtn==="Add to Cart"){
           dispatch(addItem(prod))
           setCartbtn('Remove')
         }
         else{
           dispatch(remItem(prod))
           setCartbtn("Add to Cart")
         }
      }
      

  
  return (
    <div>
        {/* <img src={Detailsaccess.img} alt="" /> 
        <h1>{Detailsaccess.model}</h1>
             <p>price:₹{Detailsaccess.price}</p> */}

<div className="container my-5 py-3">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={Detailsaccess.img} alt={Detailsaccess.titles} height='400px' /> 
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className='display-5 fw-bold'>{Detailsaccess.titles}</h1>
                <hr />
                <h2 className='my-4'>{Detailsaccess.brand}</h2>
                <h2 className='my-4'>₹{Detailsaccess.price}</h2>
                
                <button onClick={()=>handleCart(prod)} className='btn btn-outline-primary my-5'>{cartbtn}</button>
            </div>
        </div>
    </div>
        

    </div>
  )
}

export default ProductDetails