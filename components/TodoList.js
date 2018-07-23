import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, onToggle, onDestroy, setShowAll, setShowActive, setShowCompleted}) =>
  <div>
    <ul className="todo-list">
      {todos.map(todo =>
        <TodoItem key={todo.id} title={todo.title} completed={todo.completed} show={todo.display} onToggle={() => onToggle(todo)} onDestroy={() => onDestroy(todo)}/>
      )}
    </ul>
      <button onClick={setShowAll} > All </button>
      {' '}
      <button onClick={setShowActive} > Active </button>
      {' '}
      <button onClick={setShowCompleted} > Completed </button>
  </div>
export default TodoList
