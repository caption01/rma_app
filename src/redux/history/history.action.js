import { historyType } from './history.type'

export const startFetchHistoryProcess = () => {
    return (dispatch) => {

        dispatch(fetchHistoryStart())

        fetch(`http://localhost:3000/history/static/food`)
            .then(result => result.json())
            .then(result => dispatch(fetchHistorySuccess(result)))
            .then(result => dispatch(setHistoryData(result.payload)))
            .catch(err => dispatch(fetchHistoryFail(err)))
    }
}

export const fetchHistoryWithDateSelect = (datePast, dateFuture) => {
    return (dispatch) => {

        dispatch(fetchHistoryWithDateStart())
        fetch(`http://localhost:3000/history/static/food/${datePast}/${dateFuture}`)
            .then(result => result.json())
            .then(result => dispatch(fetchHistorySuccess(result)))
            .then(result => dispatch(setHistoryData(result.payload)))
            .catch(err => dispatch(fetchHistoryFail(err)))

    }
}

export const fetchHistoryStart = () => ({
    type: historyType.FETCH_HISTORY_START
})

export const fetchHistoryWithDateStart = () => ({
    type: historyType.FETCH_HISTORY_WITH_DATE_START
})

export const fetchHistorySuccess = (result) => ({
    type: historyType.FETCH_HISTORY_SUCCESS,
    payload: result
})

export const setHistoryData = (data) => ({
    type: historyType.SET_HISTORY_FOOD,
    payload: data
})

export const fetchHistoryFail = (err) => ({
    type: historyType.FETCH_HISTORY_FAIL,
    payload: err.message
})

export const setIndexSelector = (value) => ({
    type: historyType.SET_INDEX,
    payload: value
})



export const startFetchHistoryUserProcess = () => {
    return (dispatch) => {

        dispatch(fetchHistoryStart)

        fetch('http://localhost:3000/history/static/user')
            .then(result => result.json())
            .then(result => dispatch(fetchHistorySuccess(result)))
            .then(result => dispatch(setHistoryUser(result.payload)))
            .catch(err => dispatch(fetchHistoryFail(err)))
    }
}

export const setHistoryUser = (data) => ({
    type: historyType.SET_HISTORY_USER,
    payload: data
})

export const FetchHistoryUserProcessWithDateSelect = (datePast, dateFuture) => {
    return (dispatch) => {

        dispatch(fetchHistoryStart)

        fetch(`http://localhost:3000/history/static/user/${datePast}/${dateFuture}`)
            .then(result => result.json())
            .then(result => dispatch(fetchHistorySuccess(result)))
            .then(result => dispatch(setHistoryUser(result.payload)))
            .catch(err => dispatch(fetchHistoryFail(err)))
    }
}