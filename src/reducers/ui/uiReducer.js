import { combineReducers } from 'redux';
import { uiLoadersReducer } from './uiLoadersReducer';

export const uiReducer = combineReducers({
  loaders: uiLoadersReducer,
});

