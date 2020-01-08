import { combineReducers } from 'redux';

//import reducer
import userReducer from './user/user.reducer';
import staffReducer from './staff/staff.reducer';
import tableReducer from './table/table.reducer';
import orderReducer from './order/order.reducer';
import historyReducer from './history/history.reducer'


const rootReducer = combineReducers({
    user: userReducer,
    staff: staffReducer,
    table: tableReducer,
    order: orderReducer,
    history: historyReducer
});



export default rootReducer;