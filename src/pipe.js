import compose from './compose';

export default (initialValue, fns) => compose(fns)(initialValue);
