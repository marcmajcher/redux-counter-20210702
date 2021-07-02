export function addAmount(amount) {
  return { type: 'ADD_AMOUNT', payload: amount };
}

export function incrementAction() {
  return { type: 'INCREMENT_COUNTER' };
}

export function decrementAction() {
  return { type: 'DECREMENT_COUNTER' };
}

