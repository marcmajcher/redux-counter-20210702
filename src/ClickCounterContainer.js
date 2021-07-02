import ClickCounterComponent from './ClickCounterComponent';

export default function ClickCounterContainer(props) {
  return <ClickCounterComponent counter={props.counter} />;
}
