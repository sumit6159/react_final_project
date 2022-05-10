
import Accessories from "./accessories/Accessories"
import "./home.css"
import Mobile from "./mobiles/Mobile"
import React from 'react'



const Home = () => {
 //const [item, setItem]= useState([])
//  const dispatch = useDispatch()
//  const {data, loading} = useSelector((store)=>store.data)

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //   .then(res=>res.json())
  //   .then((result)=>{setItem([...result])})
            
  // }, [])
  // useEffect(()=>{
  //   dispatch(apiGetData())
  // }, [dispatch])
  
  return (
    <>
     <div className='parentContainer'>
     
      <Mobile/>
     
     </div>
     <div className='parentContainer'>
     
     <Accessories/>
    </div>
     
    </>
  )
}

export default Home