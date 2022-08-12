import axios from 'axios'
const baseApiUrl = process.env.REACT_APP_API_URL;

const apiurl = `${baseApiUrl}/todos`

export const insertAsync = async(data)=>{

    const result =await axios.post(apiurl,data)
    return result;    
}


export const getAllAsync = async()=>{
    const result =await axios.get(apiurl)
    return result;
}
export const deleteAsync = async(id)=>{
    const response = await axios.delete(apiurl+`/${id}`)
    return response.status === 200;
}