import { CHANGE_DESCRIPTION, CHANGE_NAME, CHANGE_TIME } from '../reducers/create'
import { ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS } from '../reducers/getData'

export const changeName = (params) => ({
  type: CHANGE_NAME,
  value: params
})

export const changeDesc = (params) => ({
  type: CHANGE_DESCRIPTION,
  value: params
})

export const changeInitial = (params) => ({
  type: CHANGE_TIME,
  value: params
})

export const itemsHasErrored = bool => ({
  type: ITEMS_HAS_ERRORED,
  value: bool
})

export const itemsIsLoading = bool => ({
  type: ITEMS_IS_LOADING,
  value: bool
})

export const itemsFetchDataSuccess = tasks => ({
  type: ITEMS_FETCH_DATA_SUCCESS,
  value: tasks
})

export function requestData(url, methodRequest, dataSend) {
  return dispatch => {
    dispatch(itemsIsLoading(true))
    const params = {method: methodRequest}
    if (methodRequest !== 'GET') {
      params['headers'] = {'Content-Type': 'application/json'}
      params['body'] = JSON.stringify(dataSend)
    }
    fetch(url, params).then(
      response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(itemsIsLoading(false))
        return response
      }
    ).then(
      response =>
        response.json().then(data => ({
            data: data,
            status: response.status
          })
        )
    ).then(
      tasksResponse => dispatch(
        itemsFetchDataSuccess(tasksResponse.data)
      )
    ).catch((error) => {
      console.error(error)
      dispatch(itemsHasErrored(true))
    })
  }
}