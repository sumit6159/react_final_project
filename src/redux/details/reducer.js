
  
import {GET_DETAIL_Access} from './action'

const Detailsaccess = JSON.parse(localStorage.getItem('Detailsaccess')) || {};

const initialState = {
   
    Detailsaccess : Detailsaccess || {},
    loading : false,
    currentData : {},
    
}
export const detailReducer = (store = initialState, {type, payload}) =>{
    switch(type){
       
      case GET_DETAIL_Access:
        return {...store, Detailsaccess : payload, loading : false}
        default:
            return store
    }
}

