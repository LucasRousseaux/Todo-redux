import React from 'react'

const NewTodo = ({ draft, onDraftChange, onAddTodo }) => {
  function handleSubmit (event) {
    console.log(event)
    event.preventDefault()
    onAddTodo(draft)
  }
  function handleChange (event) {
    event.preventDefault()
    onDraftChange(event.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" autoFocus className="new-todo" value={draft} onChange={handleChange}/>
    </form>
  )
}

export default NewTodo
