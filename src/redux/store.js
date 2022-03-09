import { createStore, applyMiddleware } from 'redux'; 
import thunk from "redux-thunk";
import reducerFetch from './reducer/fetchUserReducer';

const store = createStore(reducerFetch ,applyMiddleware(thunk))

export default store;