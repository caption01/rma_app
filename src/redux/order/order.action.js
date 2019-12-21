import {orderType} from './order.type'

export const setServeStatus = (updateOderList) => ({
    type: orderType.SET_SERVE_STATUS,
    payload: updateOderList
})