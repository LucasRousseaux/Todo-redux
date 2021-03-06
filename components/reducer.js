import {DRAFT_CHANGE,ADD_TODO,TOGGLE_TODO,DESTROY_TODO,SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED, SET_FILTER} from './ActionType.js'



const draftReducer = (state = '', action) => {

  console.log('draftReducer:',state, action)

  switch (action.type) {
    case DRAFT_CHANGE:
      return action.value
    case ADD_TODO:
      return ''
    default:
      return state
  }

}

const todosReducer = (state = [], action) => {

  console.log('todosReducer;',state, action)

  switch (action.type) {
    case ADD_TODO:
      return [...state,action.newTodo]
    case DESTROY_TODO:
      return state.filter( (item) => item !== action.todo)
    case TOGGLE_TODO:
      return state.map( (item) => item === action.todo ? {...item, completed: !action.todo.completed} : item)
    default:
      return state
  }

}


const filterReducer = (state = SHOW_ALL, action) => {

  console.log('filterReducer:',state,'action:', action)

  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }

}

export {todosReducer,draftReducer,filterReducer}
