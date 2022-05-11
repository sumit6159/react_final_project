import axios from "axios"
const GET_DATA = "GET_DATA"


const getData =(data)=>({type:GET_DATA, payload:data})

const apiGetData = ()=>{
    return async(dispatch)=>{
        try {
            
            await axios.get('http://localhost:2446/mobile').then((res)=>{
                dispatch(getData(res.data))
            })
           
        }
        catch (err) {
            console.log(err);
        }
    }
}


export{ GET_DATA, getData, apiGetData}