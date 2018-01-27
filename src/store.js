import { createStore, compose } from 'redux'
import rootReducer from './reducer'
import { firebase as fbConfig } from './config'
import firebase from 'firebase'
import { reactReduxFirebase } from 'react-redux-firebase'

export default function configureStore (initialState, history) {
  // Initialize Firebase instance
  firebase.initializeApp(fbConfig)

  const createStoreWithMiddleware = compose(
    reactReduxFirebase(firebase,
                       {
                         userProfile: 'users',
                         enableLogging: false
                       }
    ),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}