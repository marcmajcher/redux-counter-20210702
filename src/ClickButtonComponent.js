import { useDispatch } from 'react-redux';

export default function ClickButtonComponent() {
  const dispatch = useDispatch();
  const incrementAction = { type: 'INCREMENT_COUNTER' };
  const decrementAction = { type: 'DECREMENT_COUNTER' };


  return (
    <div>
      <button onClick={() => dispatch(incrementAction)}>Click Me UP</button>
      <button onClick={() => dispatch(decrementAction)}>Click Me DOWN</button>
    </div>
  );
}
