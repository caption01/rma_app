import {orderType} from './order.type'

export const setServeStatus = (updateOderList) => ({
    type: orderType.SET_SERVE_STATUS,
    payload: updateOderList
})

export const loadData = (data) => ({
    type: orderType.LOAD_DATA,
    payload: data
})

export const fetchingDataLoading = () => {
    return (dispatch) => {
         fetch('http://localhost:3000/orders')
            .then(result => result.json())
            .then(result => dispatch(loadData(result)))
            .catch(err => console.log(err.message))
    }
}

export const clearOder = (updateOderList) => ({
    type: orderType.CLEAR_ORDER,
    payload: updateOderList
})

export const fetchingClearOrder = (orderItem) => {

    return (dispatch) => {

        fetch('http://localhost:3000/orders',{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json' 
            },
            mode: 'cors',
            body: JSON.stringify(orderItem)
        })
            .then(result => dispatch(fetchingDataLoading()))
            .catch(err => console.log(err))

    }
}

export const fetchingCloseOrder = (orderItem) => {
    return (dispatch) => {

        fetch('http://localhost:3000/orders',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' 
            },
            mode: 'cors',
            body: JSON.stringify(orderItem)
        })
            .then(result => dispatch(fetchingDataLoading()))
            .catch(err => console.log(err))

    }
}