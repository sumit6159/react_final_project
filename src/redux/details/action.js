import axios from "axios"

const GET_DETAIL_Access =  "GET_DETAIL_Access"
const GET_DETAIL_mobile =  "GET_DETAIL_mobile"

const getDetailsAccess = (data)=>({type:GET_DETAIL_Access, payload:data})
const getDetailsMobile = (data)=>({type:GET_DETAIL_mobile, payload:data})

const apigetDetailsAccess = (id) =>{
    return async  (dispatch)=>{
        try {
           
            const res = await axios.get(`http://localhost:2446/accessories/${id}`)
            localStorage.setItem('Details', JSON.stringify(res.data))
            dispatch(getDetailsAccess(res.data))

        }
        catch (err) {
            console.log(err);
        }
    }
}
const apigetDetailsmobile = (id) =>{
    return async  (dispatch)=>{
        try {
           
            const res = await axios.get(`http://localhost:2446/accessories/${id}`)
            localStorage.setItem('Details', JSON.stringify(res.data))
            dispatch(getDetailsMobile(res.data))

        }
        catch (err) {
            console.log(err);
        }
    }
}

export {GET_DETAIL_Access, GET_DETAIL_mobile, getDetailsAccess, getDetailsMobile, apigetDetailsAccess,apigetDetailsmobile}