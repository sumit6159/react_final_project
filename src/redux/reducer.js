import { GET_DATA } from "./action";

const iniState={
    data:[],
    loading: false

}

export const itemReducer =(store= iniState,{type,payload})=>{
    switch(type){
        case GET_DATA:
            return {...store,  data:payload, loading:true}
            default:
           return store
    }
    
}