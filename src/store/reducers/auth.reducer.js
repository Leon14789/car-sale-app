import { actionTypes } from '../actions/auth.action'

const initialState = {
    crendentials: {
      email: '',
      password: ''
    },
    success: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionTypes.CHANGE:
    return { ...state, 
      crendentials: {
            ...state.crendentials,
            ...payload  
        }
     }

     case actionTypes.SUCCESS:
        return { ...state, 
            success: payload  
            
         }

  default:
    return state
  }
}
