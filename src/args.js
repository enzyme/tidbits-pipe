export default (fn, ...rest) => val => fn(val, ...rest);
