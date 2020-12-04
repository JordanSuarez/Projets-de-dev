import { combineReducers } from 'redux';
import authReducer from './auth';
import profileEditReducer from './profileEdit';

const rootReducer = combineReducers({
  auth: authReducer,
  profileEdit: profileEditReducer,
});
export default rootReducer;
