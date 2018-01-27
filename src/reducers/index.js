import { combineReducers } from 'redux'
import { HELLO_WORLD, RESET } from './../actions'

const initialState = {}

const helloWorld = (state=initialState, action) => {
  switch (action.type) {
    case HELLO_WORLD:
      return Object.assign({}, state, { message: 'Hello, World!' });
    case RESET:
    	return state = initialState;
    default:
      return state;
  }
}

const counter = (state=0, action) => {
  switch (action.type) {
    case 'inc':
      console.log(state);
      return ++state;
    case 'dec':
      return state--;
    default:
      return state;
  }
}

const helloReducer = combineReducers({
  helloWorld, counter
})

export default helloReducer
