
//import Accessories from "./accessories/Accessories"

// import Mobile from "./mobiles/Mobile"
import React from 'react'
import Accessories from './accessories/Accessories'
import Mobile from './mobiles/Mobile'
// import reactImage1 from '../assets/reactImage1.jpeg'
// import reactImage2 from '../assets/reactImage2.jpeg'
// import reactImage3 from '../assets/reactImage3.jpeg'
// import reactImage4 from '../assets/reactImage4.jpeg'



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
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='/assets/reactImage1.jpeg' className="d-block w-100" alt="image" height='600px'/>
    </div>
    <div className="carousel-item">
      <img src='/assets/reactImage3.jpeg'  className="d-block w-100" alt="image" height='600px'/>
    </div>
    <div className="carousel-item">
      <img src='/assets/reactImage2.jpeg'  className="d-block w-100" alt="image" height='600px'/>
    </div>
    <div className="carousel-item">
      <img src='/assets/reactImage4.jpeg'  className="d-block w-100" alt="image" height='600px'/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 <Mobile/>
 
 <Accessories/>
     
    </>
  )
}

export default Home