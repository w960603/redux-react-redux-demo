import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {reducer} from '../reducer'
import initialState from './initialState'

console.log(initialState, thunk);
export const store = createStore(reducer, initialState, applyMiddleware(thunk))
