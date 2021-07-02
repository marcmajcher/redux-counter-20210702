import ClickButtonComponent from "./ClickButtonComponent";

export default function ClickButtonContainer(props) {
  return <ClickButtonComponent handleClick={props.handleClick}/>
}