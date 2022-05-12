import axios from "axios"

const GET_DETAIL_mobile =  "GET_DETAIL_mobile"

const getDetailsMobile = (data)=>({type:GET_DETAIL_mobile, payload:data})

const apigetDetailsmobile = (id) =>{
    return async  (dispatch)=>{
        try {
           
            const res = await axios.get(`http://localhost:2446/mobile/${id}`)
            localStorage.setItem('Detailsmobile', JSON.stringify(res.data))
            dispatch(getDetailsMobile(res.data))

        }
        catch (err) {
            console.log(err);
        }
    }
}

export {getDetailsMobile,GET_DETAIL_mobile, apigetDetailsmobile}