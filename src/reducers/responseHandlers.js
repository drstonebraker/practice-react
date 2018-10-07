// boolean
export const XXX_HANDLER = 'XXX_HANDLER';

export const booleanResponseHandlers = [XXX_HANDLER];

export const booleanErrorResponseHandlers = [
  
];

// by id
export const YYY_HANDLER = 'YYY_HANDLER';

export const ZZZIdResponseHandlers = [YYY_HANDLER];

export const ZZZIdErrorResponseHandlers = [

];

const initializeHandlerValues = initialValue => (accum, handler) => {
  accum[handler] = initialValue;
  return accum;
};

export const createResponseHandlersInitialState = (handlers, initialValue) =>
  handlers.reduce(initializeHandlerValues(initialValue), {});

/**
 * handlers to use for both errors and loaders.  Should be one (sometimes more)
 * for every fetch.
 * @returns {{}} -- factory function is used to return this object so that
 * it can be used in multiple locations while being [referentially] distinct
 * objects (and nested objects will also be referentially distinct).
 */
export const createCombinedResponseHandlersInitialState = () => ({
  ...createResponseHandlersInitialState(booleanResponseHandlers, null),
  ...createResponseHandlersInitialState(ZZZIdResponseHandlers, {}),
});

/**
 * handlers to use in error reducer but not loaders reducer.
 * Should correspond to the errors in util/frontendErrors
 */
export const createCombinedErrorResponseHandlersInitialState = {
  ...createResponseHandlersInitialState(booleanErrorResponseHandlers, null),
  ...createResponseHandlersInitialState(ZZZIdErrorResponseHandlers, {}),
};
