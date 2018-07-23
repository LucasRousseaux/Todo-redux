import React, {Component} from 'react'
import TodoApp from './components/TodoApp'

import 'todomvc-app-css/index.css'


class App extends Component {
  render() {
    return (
        <div className="container">
          <TodoApp />
        </div>
    );
  }
}




export default App
