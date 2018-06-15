export const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION'
export const CHANGE_TIME = 'CHANGE_TIME'
export const CHANGE_NAME = 'CHANGE_NAME'

const initialState = {
  nameField: '',
  descField: '',
  initialField: '',
  user: 1
}

const create = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        nameField: action.value
      }

    case CHANGE_DESCRIPTION:
      return {
        ...state,
        descField: action.value
      }

    case CHANGE_TIME:
      return {
        ...state,
        initialField: action.value
      }

    default:
      return state
  }
}

export default create



