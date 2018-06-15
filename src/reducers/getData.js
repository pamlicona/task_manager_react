export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED'
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING'
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS'

const initialState = {
  hasErrored: false,
  isLoading: true,
  tasksArray: []
}

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_HAS_ERRORED:
      return {
        ...state,
        hasErrored: action.value
      }

    case ITEMS_IS_LOADING:
      return {
        ...state,
        isLoading: action.value
      }

    case ITEMS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        tasksArray: action.value
      }

    default:
      return state
  }
}

export default tasks