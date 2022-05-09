import {createStore, combineReducers, applyMiddleware} from "redux"
import ReduxThunk from "redux-thunk"
import { itemReducer } from "./reducer"

const rootReducer = combineReducers({
    data: itemReducer
})

export const store= createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
)