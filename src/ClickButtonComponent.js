import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAmount, incrementAction, decrementAction } from './actions';

export default function ClickButtonComponent() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  return (
    <>
      <div>
        <button onClick={() => dispatch(incrementAction())}>Click Me UP</button>
        <button onClick={() => dispatch(decrementAction())}>Click Me DOWN</button>
      </div>
      <div>
        <button onClick={() => dispatch(addAmount(amount))}>Add This:</button>

        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
    </>
  );
}
