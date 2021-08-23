import { combineReducers } from 'redux';
import { searchReducer } from './searchReducer';
import { detailsReducer } from './detailsReducer';

export const rootReducer = combineReducers({
  search: searchReducer,
  details: detailsReducer,
});
