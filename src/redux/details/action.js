import axios from "axios"

const GET_DETAIL_Access =  "GET_DETAIL_Access"


const getDetailsAccess = (data)=>({type:GET_DETAIL_Access, payload:data})


const apigetDetailsAccess = (id) =>{
    return async  (dispatch)=>{
        try {
           
            const res = await axios.get(`http://localhost:2446/accessories/${id}`)
            localStorage.setItem('Detailsaccess', JSON.stringify(res.data))
            dispatch(getDetailsAccess(res.data))

        }
        catch (err) {
            console.log(err);
        }
    }
}


export {GET_DETAIL_Access, getDetailsAccess, apigetDetailsAccess}