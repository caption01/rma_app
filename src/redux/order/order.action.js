import {orderType} from './order.type'

export const setServeStatus = (updateOderList) => ({
    type: orderType.SET_SERVE_STATUS,
    payload: updateOderList
})

export const loadData = (data) => ({
    type: orderType.LOAD_DATA,
    payload: data
})