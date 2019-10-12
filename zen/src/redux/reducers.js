import { combineReducers } from "redux"

import { SET_NAME, GET_LIST, SET_FAIL } from './actions'

function names(state = {
 list: [],
 selected_name: 'Cole',
 error: false
}, action) {
 switch (action.type) {
   case SET_NAME:
     return Object.assign({}, state, {
       selected_name: action.selected_name
     })
   case GET_LIST:
     return Object.assign({}, state, {
        list: action.payload.list
     })
   case SET_FAIL:
     return Object.assign({}, state, {
        error: true
     })
   default: return state
 }
}

const reducers = combineReducers({
  names
})

export default reducers
