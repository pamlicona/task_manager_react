import { combineReducers } from 'redux'
import create from './create'
import tasks from './getData'

export default combineReducers({
  create,
  tasks
})