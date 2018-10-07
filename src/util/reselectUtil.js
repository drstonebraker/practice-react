import createCachedSelector from 're-reselect';

export const createResolver = key => (state, ownProps) => {
  const cacheKey = ownProps[key];
  if (cacheKey == null) {
    console.warn(`undefined resolver value for ${key}`);
    console.trace();
  }
  return cacheKey;
};

export const createSelectorById = id => (...args) => {
  return createCachedSelector(...args)(
    createResolver(id)
  );
};
