import { combineReducers } from 'redux';
import exampleReducer from './botaoClicadoReducer';

export default combineReducers({
  example: exampleReducer,
});
