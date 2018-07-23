import {DRAFT_CHANGE,ADD_TODO,TOGGLE_TODO,DESTROY_TODO,SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED} from './ActionType.js'



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


const filterReducer = (state = [], action) => {

  console.log('filterReducer:',state, action)

  switch (action.type) {
    case SHOW_ALL:
      return state
    case SHOW_ACTIVE:
      return state.map( (item) => !item.completed ? item.display = true : item.display= false)
    case SHOW_COMPLETED:
      return state.map( (item) => item.completed ? item.display = true : item.display= false)
    default:
      return state
  }

}

export {todosReducer,draftReducer,filterReducer}
