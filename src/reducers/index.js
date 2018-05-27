import { combineReducers } from 'redux';
import ProductListReducer from './ProductListReducer';
import ProductReducer from './ProductReducer';

export default combineReducers({
  productList: ProductListReducer,
  product: ProductReducer,
});
