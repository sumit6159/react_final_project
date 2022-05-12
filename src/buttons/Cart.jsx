import React from 'react'
import { Link } from 'react-router-dom'


const Cart = () => {
 
  return (
    <>
    <Link to='/cart' className='btn btn-outline-primary ms-2'>
        <span className='fa fa-shopping-cart me-1'></span> cart(0)
    </Link>
    
    </>
  )
}

export default Cart