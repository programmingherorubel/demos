import { combineReducers } from 'redux'
import AddProductReducers from './AddProduct/AddProductReducers'


const RootReducers = combineReducers({
    products:AddProductReducers
})

export default RootReducers