export default function ClickButtonComponent(props) {
  return (
    <div>
      <button onClick={props.handleClick}>Click Me</button>
    </div>
  );
}
