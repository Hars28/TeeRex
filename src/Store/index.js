import { legacy_createStore ,applyMiddleware,combineReducers,compose} from "redux";
import thunk from "redux-thunk"
import { productReducer } from "./Reducers/productReducer";
import { cartReducer } from "./Reducers/cartReducer";
const rootReducer=combineReducers({
productReducer,
cartReducer
})
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store= legacy_createStore(rootReducer,createComposer(applyMiddleware(thunk)))