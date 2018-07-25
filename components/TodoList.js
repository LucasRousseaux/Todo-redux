import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, onToggle, onDestroy}) =>
  <div>
    <ul className="todo-list">
      {todos.map(todo =>
        <TodoItem key={todo.id} title={todo.title} completed={todo.completed} onToggle={() => onToggle(todo)} onDestroy={() => onDestroy(todo)}/>
      )}
    </ul>
  </div>

export default TodoList
