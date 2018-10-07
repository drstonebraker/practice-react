import { createSelector } from 'reselect';

import {
  createSelectorByYYYId
} from './reselectUtils';

import {
  // boolean
  XXX_HANDLER,
  // by id
  YYY_HANDLER,
} from '../reducers/responseHandlers';

const getEntitiesState = (state, ownProps) => state.entities;
const getErrorsState = (state, ownProps) => state.errors;
const getSessionState = (state, ownProps) => state.session;
const getUiState = (state, ownProps) => state.ui;

///////////////////////
// Errors
///////////////////////

// // boolean

// XXX
export const getXXXError = createSelector(
  getErrorsState,
  errors => errors[XXX_HANDLER]
);

// // by YYYId

// YYY
const getYYYErrors = createSelector(
  getErrorsState,
  errors => errors[YYY_HANDLER]
);

export const getYYYErrorByYYYId = createSelectorByYYYId(
  getYYYErrors,
  (state, ownProps) => ownProps.projectId,
  (YYYErrors, YYYId) => {
    if (YYYErrors) return YYYErrors[YYYId];
  }
);

///////////////////////
// Ui
///////////////////////
// loaders

const getLoaders = createSelector(getUiState, uiState => uiState.loaders);

// // boolean

// XXX
export const getIsXXXLoading = createSelector(
  getLoaders,
  loaders => loaders[XXX_HANDLER]
);

// // by YYYId

// YYY
const getYYYLoaders = createSelector(
  getLoaders,
  loaders => loaders[YYY_HANDLER]
);

export const getIsGetProjectLoadingByProjectId = createSelectorByYYYId(
  getYYYLoaders,
  (state, ownProps) => ownProps.YYYId,
  (getYYYLoaders, YYYId) => {
    if (getYYYLoaders) return getYYYLoaders[YYYId];
  }
);