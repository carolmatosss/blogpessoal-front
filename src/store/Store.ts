import {createStore} from 'redux'
import { tokenReducer } from './tokens/TokensReduce'

const store = createStore(tokenReducer);

export default store;