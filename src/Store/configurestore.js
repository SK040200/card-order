
import {createStore,combineReducers} from 'redux'
import cartReducer from '../Reducer/cartReducer'
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'


const presistConfig={
    key:'root',
    storage,
    blacklist:"original_price"
}   

const presist=persistReducer(presistConfig,cartReducer)

const configureStore=()=>{
const store = createStore(combineReducers({
 count:presist
}))

return store 
}

export default configureStore