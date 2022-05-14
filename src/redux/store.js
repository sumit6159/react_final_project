import {createStore, combineReducers, applyMiddleware} from "redux"
import ReduxThunk from "redux-thunk"
import { itemReducer } from "./mobile/reducer"
import { accessoryReducer } from "./accessory/reducer"
import { detailReducer } from "./details/reducer"
import {mobileDetailReducer} from './mobileDetail/reducer'
import addItem from './cart/reducer'


const rootReducer = combineReducers({
    data: itemReducer,
    accessory:accessoryReducer,
    detail:detailReducer,
    mobileDetail:mobileDetailReducer,
    addItem:addItem
    
})

export const store= createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
)