import { createStore , combineReducers } from 'redux'
import reducer from "./reducer"

const Reducers= combineReducers({
posts:reducer
})

export type RootState= ReturnType<typeof Reducers>

export const store=createStore(Reducers)