import { OtherState, OtherActionsTypes } from './types'
const initialState: OtherState = {
  collapsed: false
}

export const normalReducer = (state = initialState, action: OtherActionsTypes) => {
  if(action.type === 'normal') {
    const { payload: { key, value } } = action
    return {
      ...state,
      [key]: value
    }
  } else {
    return state
  }
  
}