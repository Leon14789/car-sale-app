import { actionTypes } from "../actions/notify.action";

const initialState = {
    open: false,
    horizontal: 'left',
    vertical: 'center',
    class: 'error',
    time: 3000,
    msg: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionTypes.NOTIFY:
    return { ...state, ...payload }

  default:
    return state
  }
}

