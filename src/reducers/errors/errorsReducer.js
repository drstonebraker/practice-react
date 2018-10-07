import {
  SHOW_ERROR,
  REMOVE_ERROR,
  HANDLE_SUCCESS_RESPONSE,
  HANDLE_ERROR_RESPONSE,
} from '../../actions/sharedActions';

import {
  createCombinedResponseHandlersInitialState,
  createCombinedErrorResponseHandlersInitialState,
} from '../responseHandlers';

const initialState = {
  ...createCombinedResponseHandlersInitialState(),
  ...createCombinedErrorResponseHandlersInitialState()
};

export const errorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = { ...state };
  const { handler, byId, byIds, error, } = action;

  switch (action.type) {
    ///////////////////////
    // Generic action types
    ///////////////////////

    case SHOW_ERROR:
    case HANDLE_ERROR_RESPONSE:
      if (byId) {
        newState[handler] = {
          ...newState[handler],
          [byId]: error
        };
      } else if (byIds) {
        newState[handler] = {
          ...newState[handler],
          ...byIds
        };
      } else {
        newState[handler] = error;
      }
      return newState;
    case REMOVE_ERROR:
    case HANDLE_SUCCESS_RESPONSE:
      if (byId) {
        // do nothing if already falsy
        if (!newState[handler][byId]) {
          return state;
        }
        newState[handler] = {
          ...newState[handler]
        };
        newState[handler][byId] = null;
      } else if (byIds) {
        newState[handler] = {
          ...newState[handler]
        };
        let areAllAlreadyFalse = true;
        byIds.forEach(id => {
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
        newState[handler] = null;
      }
      return newState;
    default: 
      return state;
  }
};
