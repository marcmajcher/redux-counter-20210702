import { createStore } from 'redux';

const defaultStore = {
  count: 0,
};

function reducer(store = defaultStore, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { ...store, count: store.count + 1 };
    case 'DECREMENT_COUNTER':
      return { ...store, count: store.count - 1 };
    case 'ADD_AMOUNT':
      return { ...store, count: store.count + parseInt(action.payload) };
    default:
      return store;
  }
}

export const store = createStore(reducer, defaultStore);
