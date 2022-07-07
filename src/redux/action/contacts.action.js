
import axios from "axios";

export const allEmplyee = ()=>{
  
  const senData = async (dispatch) => {
    try {await axios.get("https://dummy.restapiexample.com/api/v1/employees" ).then((res)=>{
      // console.log("Data update________",res.data.data.data)
      dispatch({
      type : "ALL_EMPLYEE",
      payload:res.data.data
      })
  })
}catch(err){
  console.log('Get Data ----Error',err)
}
}
    return (dispatch)=>{
      return senData(dispatch)
        // return axios.get("https://dummy.restapiexample.com/api/v1/employees").then((res)=>{
        //     console.log("Data________",res.data.data)
        //     dispatch({
        //     type : "ALL_EMPLYEE",
        //     payload:res.data.data,
        //     })
        // })
    }
    
}

export const addEmplyee = (data)=>{
    // console.log(data)
    return (dispatch)=>{
        return axios.post("https://dummy.restapiexample.com/api/v1/create",{data}).then((res)=>{
            // console.log("Data Add________",res)
            dispatch({
            type : "ADD_EMPLYEE",
            payload:res.data.data.data,
            })
        })
    }
}
export const updateEmplyee = (data , id)=>{
  // console.log('id recive ',id)
  return (dispatch)=>{
    return axios.put(`https://dummy.restapiexample.com/api/v1/update/`+id,{data}).then((res)=>{
        // console.log("Data update________",res.data.data.data)
        dispatch({
        type : "UPDATE_EMPLYEE",
        payload:res.data.data.data,
        })
    })
    
}
}

export const getContactDetail = (id) => {
  // console.log(id)
    return (dispatch) => {
      axios
        .get(
          `https://dummy.restapiexample.com/api/v1/employee/${id}`
        )
        .then(function (response) {
          // console.log('get single Data ',response.data.data)
          dispatch({
            type: "CONTACT_DETAIL",
            payload: response.data.data,
          })
        })
    }
  }