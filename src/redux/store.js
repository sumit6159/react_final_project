import {createStore, combineReducers, applyMiddleware} from "redux"
import ReduxThunk from "redux-thunk"
import { itemReducer } from "./mobile/reducer"
import { accessoryReducer } from "./accessory/reducer"
import { detailReducer } from "./details/reducer"

const rootReducer = combineReducers({
    data: itemReducer,
    accessory:accessoryReducer,
    detail:detailReducer
})

export const store= createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
)