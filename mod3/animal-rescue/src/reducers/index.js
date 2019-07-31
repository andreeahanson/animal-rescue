import { animalsReducer, loadingReducer, hasErroredReducer } from './AnimalsReducer';
import { combineReducers } from 'redux';
import { donationsReducer } from './DonationsReducer';

const rootReducer = combineReducers({
  animals: animalsReducer,
  donations: donationsReducer,
  isLoading: loadingReducer,
  error: hasErroredReducer
})

export default rootReducer;