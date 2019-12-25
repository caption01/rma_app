import { userType } from './user.type'


export const loadUserData = (user) => ({
    type: userType.SET_USER_DATA,
    payload: user
})

export const setUserData = (data) => ({
    type: userType.SET_USER_DATA,
    payload: data
})


export const fetchingStart = () => ({
    type: userType.FETCH_DATA_START,
    payload: true
})

export const fetchingLoading = () => ({
    type: userType.FETCH_DATA_LOADING,
    payload: true
})

export const fetchingSuccess = () => ({
    type: userType.FETCH_DATA_SUCCESS,
    payload: false
})


export const fetchingFail = (err) => ({
    type: userType.FETCH_DATA_FAIL,
    payload: err
})

export const fetchingDataStart = (path) => {
    return (dispatch) => {

    dispatch(fetchingStart())

    fetch(`http://localhost:3000${path}`)
        .then(result => result.json())
        .then(result => dispatch(setUserData(result)))
        .then(result => dispatch(setOrderHeader(result.payload)))
        .then(result => dispatch(fetchingSuccess()))
        .catch(err => dispatch(fetchingFail(err.message)))
    }
}

export const setMenu = (menus) => ({
    type: userType.SET_MENU,
    payload: menus
})

export const setOrderHeader = (userInfo) => ({
    type: userType.SET_ORDER_HEADER,
    payload: userInfo
})

export const updateOrderList = (orderList) => ({
    type: userType.UPDATE_ORDER_REQ,
    payload: orderList
})
