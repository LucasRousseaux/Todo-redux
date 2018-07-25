import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NewTodo from './NewTodo'
import TodoList from './TodoList'
import {onDraftChange, onAddTodo, onToggleTodo, onDestroyTodo,setFilter,getVisibleTodos,getDraft,getTodos,getFilter} from './Actions'
import {SHOW_ALL, SHOW_ACTIVE,SHOW_COMPLETED} from './ActionType'


const TodoApp = ({ draft, todos, onDraftChange, onAddTodo,onToggleTodo, onDestroyTodo, setFilter }) =>
    <div className="todoapp">
      <section className="header">
        <h1>todo</h1>
        <NewTodo
          draft={draft}
          onDraftChange={onDraftChange}
          onAddTodo={onAddTodo}
        />
      </section>
      <TodoList todos={todos} onToggle={onToggleTodo} onDestroy={onDestroyTodo} />
      <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => setFilter(SHOW_ALL)} > All </button>
      <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => setFilter(SHOW_ACTIVE)} > Active </button>
      <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => setFilter(SHOW_COMPLETED)} > Completed </button>
    </div>


TodoApp.propTypes = {
  draft: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  draft: getDraft(state),
  todos: getVisibleTodos(
    getTodos(state),
    getFilter(state)),
  filter: getFilter(state)
})

const mapDispatchToProps = dispatch => ({
  onDraftChange: value => dispatch(onDraftChange(value)),
  onAddTodo: todo => dispatch(onAddTodo(todo)),
  onToggleTodo: todo => dispatch(onToggleTodo(todo)),
  onDestroyTodo:todo => dispatch(onDestroyTodo(todo)),
  setFilter: filter => dispatch(setFilter(filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
