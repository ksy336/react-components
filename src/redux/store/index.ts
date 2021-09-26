import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// @ts-ignore
import { rootReducer } from './reducers/index.ts';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
