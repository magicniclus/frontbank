import { createStore, applyMiddleware } from 'redux'; 
import thunk from "redux-thunk";
import reducerFetch from './reducer/fetchUserReducer';
import { composeWithDevTools} from "redux-devtools-extension";

const store = createStore(reducerFetch ,composeWithDevTools(applyMiddleware(thunk)))

export default store;