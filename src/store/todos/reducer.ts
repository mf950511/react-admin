
import { FilterActionType, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, Todo, TodoActionType, ADD_TODO, TOGGLE_TODO} from './types'
const initFilterState: string = SHOW_ALL

export const filterReducer = (state = initFilterState, action: FilterActionType) => {
  switch(action.payload) {
    case SHOW_ALL:
    case SHOW_ACTIVE:
    case SHOW_COMPLETED:
      return action.payload
    default: 
      return state
  }
}



const initTodosState: Todo[] = [
  {
    id: 0,
    complete: false,
    text: '好好看'
  },
  {
    id: 1,
    complete: false,
    text: '好好学'
  },
  {
    id: 2,
    complete: true,
    text: '欢迎来到德莱联盟'
  }
]

export const todosReducer = (state = initTodosState, action: TodoActionType) => {
  const { payload } = action
  switch(action.type) {
    case ADD_TODO:
      const { id, text, complete } = payload
      return [...state, { id, text, complete }]
    case TOGGLE_TODO:
      return state.map(item => (item.id === payload.id) ? {...item, complete: !item.complete } : item)
    default:
      return state
  }
}