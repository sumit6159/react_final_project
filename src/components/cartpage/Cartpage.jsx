import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { remItem } from '../../redux/cart/action'

const Cartpage = () => {
    const dispatch = useDispatch()
    const state = useSelector((state)=>state.addItem)
    //console.log(state)
    const handleClose=(item)=>{
        dispatch(remItem(item))
    }

    const cartItems= (cartItem)=>{
        //console.log(cartItem)
        return(
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label='close'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt='photo' height='200px' width='180px' />
                        </div>
                        <div className="col-md-4">
                             <h3>{cartItem.titles}</h3>
                             <p className='lead fw-bold'>{cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const emptyCart=()=>{
        return (
            <div className="px-4 my-5 py-5 bg-light rounded-3">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }
    const button =()=>{
        return (
            <div className="container">
                <div className="row">
                    <Link to='/checkout' className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceed To checkout</Link>
                </div>
            </div>
        )
    }

  return (
    <>
    {state.length===0 && emptyCart()}
    {state.length!==0 && state.map(cartItems)}
    {state.length!==0 && button()}
    
    </>
  )
}

export default Cartpage