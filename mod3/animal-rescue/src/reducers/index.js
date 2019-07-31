import { animalsReducer, loadingReducer, hasErroredReducer } from './AnimalsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  animals: animalsReducer,
  isLoading: loadingReducer,
  error: hasErroredReducer
})

export default rootReducer;