import React from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
  firebaseConnect,
  isLoaded,
  isEmpty
} from 'react-redux-firebase'
import TodoItem from './TodoItem'
// eslint-disable-next-line
import NewTodo from './NewTodo'
import '../App.css'
// eslint-disable-next-line
import { firebase as firebaseConf } from '../config'
// eslint-disable-next-line
import GoogleButton from 'react-google-button'


const Home = ({ firebase, todos }) => {
  const handleAdd = () => {
    return firebase.push('/todos', { text: this.input.value, done: false })
                   .then(() => {
                     this.input.value = ''
                   })
  }
  return (
    <div className='App'>
      <div className='App-header'>
        <h2>The Office</h2>
        {/*<img src={logo} className='App-logo' alt='logo' />*/}
      </div>
      <div className='App-todos'>
        <h4>
          Loaded From
          <span className='App-Url'>
            <a href='https://the-office-278f5.firebaseio.com/'>
              the-office-278f5.firebaseio.com
            </a>
          </span>
        </h4>
        <h4>Todos List</h4>
        {
          !isLoaded(todos)
            ? 'Loading'
            : isEmpty(todos)
            ? 'Todo list is empty'
            : Object.keys(todos).map((key) => (
              <TodoItem key={key} id={key} todo={todos[key]} />
            ))
        }
        <h4>New Todo</h4>
        <input type='text' ref={ref => { this.input = ref }} />
        <button onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  )
}

export default compose(
  firebaseConnect(['todos']),
  connect(
    ({ firebase }) => ({
      todos: firebase.data.todos,
    })
  )
)(Home)