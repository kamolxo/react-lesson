import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'






import {Reducer} from './Reducers/Usereducer'
import {Productreducer} from './Reducers/Productreducer'

export const store = createStore(combineReducers({ Reducer, Productreducer }), applyMiddleware(logger))









