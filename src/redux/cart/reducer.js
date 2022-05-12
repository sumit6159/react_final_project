import { ADDITEM, REMOVEITEM} from "./action";


 const addItem=[]
    


export const addItems =(store= addItem,{type,payload})=>{
    switch(type){
        case ADDITEM:
            return [...store,  payload] 
           
            case REMOVEITEM:
                return store = store.filter((x)=>{
                    return x.id !== payload.id
                })
               
            default:
           return store;
          
    }
    
}

