   import { legacy_createStore, applyMiddleware } from 'redux'
   import { thunk } from 'redux-thunk';
   import rootReducer from '../store/reducers/routeReducer'

   let Middleware = [thunk];

   export const store = legacy_createStore(rootReducer, applyMiddleware(...Middleware));