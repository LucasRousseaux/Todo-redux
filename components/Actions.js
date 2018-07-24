import {DRAFT_CHANGE,ADD_TODO,TOGGLE_TODO,DESTROY_TODO,SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED, SET_FILTER} from './ActionType.js'

export function onAddTodo (value) {
  return {
    type: ADD_TODO,
    newTodo: {
      title: value,
      id: Date.now(),
      completed: false,
    }
  }
}

export function onDraftChange (value) {
  return {
    type: DRAFT_CHANGE,
    value
  }
}
export function onToggleTodo (todo) {
  return {
    type: TOGGLE_TODO,
    todo
  }

}
export function onDestroyTodo (todo) {
  return {
    type: DESTROY_TODO,
    todo
  }

}

export function setShowAll() {
  return {
    type: SET_FILTER,
    filter: SHOW_ALL,
  }
}

export function setShowActive() {
  return {
    type: SET_FILTER,
    filter: SHOW_ACTIVE,
  }
}

export function setShowCompleted() {
  return {
    type: SET_FILTER,
    filter: SHOW_COMPLETED,
  }
}



export const getVisibleTodos = (todos, filter) => {

  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_ACTIVE:
      return todos.filter(item => item.completed === false )
    case SHOW_COMPLETED:
      return todos.filter(item => item.completed === true )
    default:
      return todos
    }


}

export const getDraft = state => {return state.draft}

export const getTodos = state => {return state.todos}

export const getFilter = state => {return state.filter}
