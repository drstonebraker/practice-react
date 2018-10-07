// export redux action types
export const RECEIVE_ENTITIES = 'RECEIVE_ENTITIES';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const SHOW_ERROR = 'SHOW_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';
export const HANDLE_SUCCESS_RESPONSE = 'HANDLE_SUCCESS_RESPONSE';
export const HANDLE_ERROR_RESPONSE = 'HANDLE_ERROR_RESPONSE';
export const SET_INITIALIZATION = 'SET_INITIALIZATION';

// export redux-saga action types
export const REQUEST_REFRESH_DIVISION_PRICING =
  'REQUEST_REFRESH_DIVISION_PRICING';
export const REQUEST_REFRESH_DIVISION_PRICING_FOR_DIVISIONS =
  'REQUEST_REFRESH_DIVISION_PRICING_FOR_DIVISIONS';
export const REQUEST_SYNC_FORECAST = 'REQUEST_SYNC_FORECAST';
export const REQUEST_GET_OPPORTUNITY_STATUS = 'REQUEST_GET_OPPORTUNITY_STATUS';
export const CANCEL_GET_PROJECT = 'CANCEL_GET_PROJECT';

// export redux action creators
export const receiveEntities = ({ entities }) => ({
  type: RECEIVE_ENTITIES,
  entities
});

export const showLoader = ({ handler, byId, byIds }) => ({
  type: SHOW_LOADER,
  handler,
  byId,
  byIds
});

export const hideLoader = ({ handler, byId, byIds }) => ({
  type: HIDE_LOADER,
  handler,
  byId,
  byIds
});

export const showError = ({ handler, byId, byIds, error }) => ({
  type: SHOW_ERROR,
  handler,
  byId,
  byIds,
  error
});

export const removeError = ({ handler, byId, byIds }) => ({
  type: REMOVE_ERROR,
  handler,
  byId,
  byIds
});

/**
 * hides loader and removes error
 * @param {string} input.handler -- import from '../reducers/responseHandlers'
 * @param {string=} input.byId
 * @param {string[]=} input.byIds -- for attaching loader/error to multiple ids
 */
export const handleSuccessResponse = ({ handler, byId, byIds }) => ({
  type: HANDLE_SUCCESS_RESPONSE,
  handler,
  byId,
  byIds
});

/**
 * hides loader and shows error
 * @param {string} input.handler -- import from '../reducers/responseHandlers'
 * @param {string=} input.byId
 * @param {{}=} input.byIds -- for attaching loader/error to multiple ids. keys
 * should be id pointing to error
 * @param {{}} input.error -- response data from error response
 */
export const handleErrorResponse = ({ handler, byId, byIds, error }) => ({
  type: HANDLE_ERROR_RESPONSE,
  handler,
  byId,
  byIds,
  error
});
