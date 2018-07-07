export default fns => initialValue => fns.reduce((val, fn) => fn(val), initialValue);
