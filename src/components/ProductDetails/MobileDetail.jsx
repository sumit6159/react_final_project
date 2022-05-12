import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { apigetDetailsmobile } from '../../redux/mobileDetail/action'
import './product.css'



const MobileDetail = () => {
    const [cartbtn,setCartbtn]= useState("Add to Cart")
    const {id} = useParams()
    const dispatch = useDispatch()
    const {Detailsmobile} = useSelector((store)=> store.mobileDetail);

    useEffect(() => {
         
        dispatch(apigetDetailsmobile(id)) 
      }, [])

      const handleCart=(Detailsmobile)=>{
        if(cartbtn==="Add to Cart"){
          
          setCartbtn('Remove')
        }
        else{
        
          setCartbtn("Add to Cart")
        }
     }
  return (
    <>
    {/* <img src={Detailsmobile.img} alt="" /> 
    <h1>{Detailsmobile.pattern_name}</h1>
         <p>price:₹{Detailsmobile.price}</p> */}

    <div className="container my-5 py-3">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={Detailsmobile.img} alt={Detailsmobile.pattern_name} height='400px' /> 
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className='display-5 fw-bold'>{Detailsmobile.pattern_name}</h1>
                <hr />
                <h2 className='my-4'>₹{Detailsmobile.price}</h2>
                <p className='lead'>color:{Detailsmobile.color}</p>
                <button onClick={()=>handleCart(Detailsmobile)} className='btn btn-outline-primary my-5'>{cartbtn}</button>
            </div>
        </div>
    </div>

</>
  )
}

export default MobileDetail