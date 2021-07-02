import { useSelector } from 'react-redux';

export default function ClickCounterComponent() {
  const count = useSelector((s) => s.count);
  return <div>Count {count}</div>;
}
