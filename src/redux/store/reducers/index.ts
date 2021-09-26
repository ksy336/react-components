import { combineReducers } from 'redux';
// @ts-ignore
import { searchReducer } from './searchReducer.ts';
// @ts-ignore
import { detailsReducer } from './detailsReducer.ts';

export const rootReducer = combineReducers({
  search: searchReducer,
  details: detailsReducer,
});
