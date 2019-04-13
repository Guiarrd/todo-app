import {combineReducers} from 'redux'
import todoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({
    //todo é o atributo e o valor deve sempre ser uma função
    todo: todoReducer
})

export default rootReducer