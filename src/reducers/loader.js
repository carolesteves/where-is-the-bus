import { LOADER } from '../constants/actionTypes'

const defaultState = {
  visible: false,
  spin: '',
  text: ''
}

const loaderReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case LOADER:
      return Object.assign({}, state, {
        visible: action.payload.visible,
        spin: action.payload.spin || state.spin,
        text: action.payload.text || ''
      })

    default:
      return state
  }
}

export default loaderReducer
