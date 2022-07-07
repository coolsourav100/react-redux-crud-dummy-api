import { act } from "react-dom/test-utils";

const initialState = {
  details: [],
} 

const singleUser = {
  singleDetails:[],
}

export const emplyeeReducer = (state =initialState, action)=>{
  const data = state.details;
  switch(action.type){
    case "ALL_EMPLYEE":
      return {
      details: action.payload
      }
    case "ADD_EMPLYEE":
      return { 
        ...state,
        details: state.details.concat(action.payload)
    }
      
    case "UPDATE_EMPLYEE":
      const index = action.payload.id - 1;
      const newArray = [...state.details];
      newArray[index] = action.payload;
      return { 
        ...state,
        details: newArray
       }
      default :
      return state;
    }
  }

export const singleEmplyee =(state= singleUser , action) =>{
  switch(action.type){
    case "CONTACT_DETAIL":
        return {
          singleDetails: action.payload
    };
    default :
    return state;
  }
}
