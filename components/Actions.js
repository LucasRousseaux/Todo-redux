import {DRAFT_CHANGE,ADD_TODO,TOGGLE_TODO,DESTROY_TODO,SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED} from './ActionType.js'

export function onAddTodo (value) {
  return {
    type: ADD_TODO,
    newTodo: {
      title: value,
      id: Date.now(),
      completed: false,
      display:true,
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

export function setShowAll(todos) {
  return {
    type: SHOW_ALL,
  }
}

export function setShowActive(todos) {
  return {
    type: SHOW_ACTIVE,
  }
}

export function setShowCompleted(todos) {
  return {
    type: SHOW_COMPLETED,
  }
}
