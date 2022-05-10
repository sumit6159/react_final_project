import {  GET_ACCESSORY } from "./action";

const iniState={
    accessory:[],
    loading: false

}

export const accessoryReducer =(store= iniState,{type,payload})=>{
    switch(type){
        case GET_ACCESSORY:
            return {...store,  accessory:payload, loading:true}
            default:
           return store
    }
    
}