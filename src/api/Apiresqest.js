import axios from "axios";

export async function  Requestapi(url, method, header, params){

    return params? axios({
        url : url,
        method : method,
        header: header,
        data : params,
        

    })
    : axios({
        url : url,
        method : method,
        header: header,
        data : {},
        

    })
}

 const GetApiData =()=>{
    const headers = {
        "Content-Type": 'application/json'
    }
    return Requestapi("https://dummy.restapiexample.com/api/v1/employees" , "GET" , headers ,{})
}
 const PostApiData =(data)=>{
    const headers = {
        "Content-Type": 'application/json'
    }
    return Requestapi("https://dummy.restapiexample.com/api/v1/create" , "POST" , headers ,data)
}
export {GetApiData,PostApiData};