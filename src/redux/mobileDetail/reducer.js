
  
import { GET_DETAIL_mobile} from './action'
const Detailsmobile = JSON.parse(localStorage.getItem('Detailsmobile')) || {};


const initialState = {
    Detailsmobile : Detailsmobile || {},
   
    loading : false,
    currentData : {},
    
}
export const mobileDetailReducer = (store = initialState, {type, payload}) =>{
    switch(type){
        case GET_DETAIL_mobile:
            return {...store, Detailsmobile : payload, loading : false}
      
        default:
            return store
    }
}

