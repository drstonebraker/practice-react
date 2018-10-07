import {
  SHOW_LOADER,
  HIDE_LOADER,
  HANDLE_SUCCESS_RESPONSE,
  HANDLE_ERROR_RESPONSE
} from '../../actions/sharedActions';

import { createCombinedResponseHandlersInitialState } from '../responseHandlers';

const initialState = createCombinedResponseHandlersInitialState();

export const uiLoadersReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = { ...state };
  const { handler, byId, byIds } = action;

  switch (action.type) {
    case SHOW_LOADER:
      if (byId) {
        // do nothing if already true
        if (newState[handler][byId]) {
          return state;
        }
        newState[handler] = {
          ...newState[handler],
          [byId]: true
        };
      } else if (byIds) {
        newState[handler] = { ...newState[handler] };
        let areAllAlreadyTrue = true;
        byIds.forEach(id => {
          if (!newState[handler][id]) {
            areAllAlreadyTrue = false;
            newState[handler][id] = true;
          }
        });
        // do nothing if already true
        if (areAllAlreadyTrue) {
          return state;
        }
      } else {
        // do nothing if already true
        if (newState[handler]) {
          return state;
        }
        newState[handler] = true;
      }
      return newState;
    case HIDE_LOADER:
    case HANDLE_SUCCESS_RESPONSE:
    case HANDLE_ERROR_RESPONSE:
      if (byId) {
        // do nothing if already falsy
        if (!newState[handler][byId]) {
          return state;
        }
        newState[handler] = { ...newState[handler] };
        newState[handler][byId] = null;
      } else if (byIds) {
        newState[handler] = { ...newState[handler] };
        let areAllAlreadyFalse = true;
        const idList = Array.isArray(byIds) ? byIds : Object.keys(byIds);
        idList.forEach(id => {
          if (newState[handler][id]) {
            areAllAlreadyFalse = false;
            newState[handler][id] = null;
          }
        });
        // do nothing if already falsy
        if (areAllAlreadyFalse) {
          return state;
        }
      } else {
        // do nothing if already falsy
        if (!newState[handler]) {
          return state;
        }
        newState[handler] = false;
      }
      return newState;
    default:
      return state;
  }
};