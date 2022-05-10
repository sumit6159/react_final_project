import axios from "axios"

const GET_ACCESSORY = "GET_ACCESSORY"

const getAccessory =(data)=>({type:GET_ACCESSORY, payload:data})

const apiGetAccessory = ()=>{
    return async(dispatch)=>{
        try {
            
            await axios.get('http://localhost:2445/accessories').then((res)=>{
                dispatch(getAccessory(res.data))
            })
           
        }
        catch (err) {
            console.log(err);
        }
    }
}

export {GET_ACCESSORY, getAccessory, apiGetAccessory}