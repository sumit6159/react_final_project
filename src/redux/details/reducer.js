
  
import {GET_DETAIL_Access, GET_DETAIL_mobile} from './action'
const Details = JSON.parse(localStorage.getItem('Details')) || {};

const initialState = {
    addressDetails : Details || {},
    loading : false,
    currentData : {},
    
}
export const detailReducer = (store = initialState, {type, payload}) =>{
    switch(type){
      case GET_DETAIL_Access:
        return {...store, addressDetails : payload, loading : false}
        case GET_DETAIL_mobile:
            return {...store, addressDetails : payload, loading : false}
        default:
            return store
    }
}

