import React from 'react'
import ReactDOM from 'react-dom'
import App from './clase11/App'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {todosReducer,draftReducer,filterReducer} from './clase11/components/reducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  draft: draftReducer,
  filter: filterReducer,
})

//const store = createStore(rootReducer)
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


let state = store.getState()

console.log(state)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root'))
