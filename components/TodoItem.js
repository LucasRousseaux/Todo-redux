import React from 'react'

const TodoItem = ({title, completed, show, onToggle, onDestroy}) =>
  <li>
    <div className="view">
      <input type="checkbox" className="toggle" style={show ? {visibility: 'visible'} : {visibility: 'hidden'}} checked={completed} style={ {
      textDecoration: completed ? 'line-through' : 'none' } } onChange={onToggle}/>
      <label>{title}</label>
      <button className="destroy" onClick={onDestroy} />
    </div>
  </li>

export default TodoItem
