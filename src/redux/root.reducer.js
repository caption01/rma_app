import { combineReducers } from 'redux';

//import reducer
import userReducer from './user/user.reducer';
import staffReducer from './staff/staff.reducer'


const rootReducer = combineReducers({
    user: userReducer,
    staff: staffReducer
});



export default rootReducer;