import React from 'react'
import PropTypes from 'prop-types'
import { withFirebase } from 'react-redux-firebase'

const Todos = ({ firebase }) => {
  const sampleTodo = { text: 'Sample', done: false }
  const pushSample = () => firebase.push('todos', sampleTodo)
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todosList}
      </ul>
      <input type="text" ref="newTodo" />
      <button onClick={pushSample}>
        Add
      </button>
    </div>
  )
}

export default withFirebase(Todos)