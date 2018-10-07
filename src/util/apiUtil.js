
export const getJSON = res => res.ok 
  ? res.json() 
  : Promise.reject(res.statusText);