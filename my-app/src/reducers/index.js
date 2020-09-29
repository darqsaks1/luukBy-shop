import { combineReducers } from 'redux';
import shopReducer from './shop-reducer'


const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer;