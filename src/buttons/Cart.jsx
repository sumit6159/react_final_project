import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Cart = () => {
  const state = useSelector((state)=>state.addItem)
  //console.log(state)
  return (
    <>
    <Link to='/cart' >
      <button className='btn btn-outline-primary ms-2'>
        <span className='fa fa-shopping-cart'></span>
        cart({state.length})
      </button>
       
    </Link>
    
    </>
  )
}

export default Cart