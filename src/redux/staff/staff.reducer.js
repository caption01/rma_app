import { LOGIN_STAFF } from './staff.type'

const INTIAL_STAGE = {
    status: false,
    role: ''
}

const staffReducer = (state=INTIAL_STAGE, action) => {

    switch(action.type){

        case LOGIN_STAFF:
            return {
                ...state,
                status: true,
                role: action.payload.role
            }
            
        default: 
            return state
    }
}

export default staffReducer;