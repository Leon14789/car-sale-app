import { actionTypes } from "../actions/notify.action";

const initialState = {
    open: true,
    horizontal: 'left',
    vertical: 'bottom',
    class: 'success',
    time: 3000,
    message: 'Pão de Queijo'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionTypes.NOTIFY:
    return { ...state, ...payload }

  default:
    return state
  }
}
