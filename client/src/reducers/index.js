import { combineReducers } from 'redux';
import propertyReducer from './propertyReducer';

const rootReducer = combineReducers({ property: propertyReducer });

export default rootReducer;
