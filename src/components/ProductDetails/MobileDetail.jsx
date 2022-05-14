import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { apigetDetailsmobile } from '../../redux/mobileDetail/action'
import{addItem,remItem} from '../../redux/cart/action'
import './product.css'



const MobileDetail = () => {
    const [cartbtn,setCartbtn]= useState("Add to Cart")
    const {id} = useParams()
    const dispatch = useDispatch()
    const {Detailsmobile} = useSelector((store)=> store.mobileDetail);
    const {data, loading}= useSelector((store)=>store.data)
    
    const Data =  data.filter(x=>x.id==id)
    const prod = Data[0]

    useEffect(() => {
         
        dispatch(apigetDetailsmobile(id)) 
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
    <>
    {/* <img src={Detailsmobile.img} alt="" /> 
    <h1>{Detailsmobile.pattern_name}</h1>
         <p>price:₹{Detailsmobile.price}</p> */}

    <div className="container my-5 py-3">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={Detailsmobile.img} alt={Detailsmobile.titles} height='400px' /> 
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className='display-5 fw-bold'>{Detailsmobile.titles}</h1>
                <hr />
                <h2 className='my-4'>₹{Detailsmobile.price}</h2>
                <p className='lead'>color:{Detailsmobile.color}</p>
                <button onClick={()=>handleCart(prod)} className='btn btn-outline-primary my-5'>{cartbtn}</button>
            </div>
        </div>
    </div>

</>
  )
}

export default MobileDetail