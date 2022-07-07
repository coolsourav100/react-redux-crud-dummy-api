import {createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "../reducer/rootReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const eplyeeData  = {
    data: [
        { 
          name:"sourav",
          age:30,
          salary:10000
        },
        { 
            name:"Anirban",
            age:28,
            salary:15000
          },
      ],
  
}
export const store = createStore(rootReducer ,composeWithDevTools(applyMiddleware(thunk)));