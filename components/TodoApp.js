import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NewTodo from './NewTodo'
import TodoList from './TodoList'
import {onDraftChange, onAddTodo, onToggleTodo, onDestroyTodo,setShowAll,setShowActive,setShowCompleted} from './Actions'

const TodoApp = ({ draft, todos, onDraftChange, onAddTodo,onToggleTodo, onDestroyTodo }) =>
    <div className="todoapp">
      <section className="header">
        <h1>todo</h1>
        <NewTodo
          draft={draft}
          onDraftChange={onDraftChange}
          onAddTodo={onAddTodo}
        />
      </section>
      <TodoList todos={todos} onToggle={onToggleTodo} onDestroy={onDestroyTodo} setShowAll={setShowAll} setShowActive={setShowActive} setShowCompleted={setShowCompleted}/>
    </div>


TodoApp.propTypes = {
  draft: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired
}


const mapStateToProps = state => ({
  draft: state.draft,
  todos: state.todos,
})



const mapDispatchToProps = dispatch => ({
  onDraftChange: value => dispatch(onDraftChange(value)),
  onAddTodo: todo => dispatch(onAddTodo(todo)),
  onToggleTodo: todo => dispatch(onToggleTodo(todo)),
  onDestroyTodo:todo => dispatch(onDestroyTodo(todo)),
  setShowAll: () => dispatch(setShowAll()),
  SetShowActive: () => dispatch(setShowActive()),
  SetShowCompleted: () => dispatch(setShowCompleted()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
