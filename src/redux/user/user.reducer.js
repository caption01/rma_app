import { userType } from './user.type'

const INTIAL_STATE = {
    data: {},
    loading: true,
    err: ''

};

const userReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){

        case userType.FETCH_DATA_START:
            return {
                ...state,
                loading: action.payload
            }

        case userType.FETCH_DATA_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        case userType.FETCH_DATA_FAIL:
            return {
                ...state,
                err: action.payload
            }

        case userType.SET_USER_DATA:
            return {
                ...state,
                data: action.payload
            }

        case userType.FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: action.payload
            }

        default: 
            return state
    }
};

export default userReducer;