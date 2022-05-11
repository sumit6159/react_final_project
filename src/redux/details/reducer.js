
  
import {GET_DETAIL_Access, GET_DETAIL_mobile} from './action'
const Detailsaccess = JSON.parse(localStorage.getItem('Detailsaccess')) || {};
const Detailsmobile = JSON.parse(localStorage.getItem('Detailsmobile')) || {};

const initialState = {
    Detailsaccess : Detailsaccess || {},
    Detailsmobile : Detailsmobile || {},
    loading : false,
    currentData : {},
    
}
export const detailReducer = (store = initialState, {type, payload}) =>{
    switch(type){
      case GET_DETAIL_Access:
        return {...store, Detailsaccess : payload, loading : false}
        case GET_DETAIL_mobile:
            return {...store, Detailsmobile : payload, loading : false}
        default:
            return store
    }
}

