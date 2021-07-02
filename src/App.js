import { useState } from 'react';
import './App.css';
import ClickButton from './ClickButton';
import ClickCounter from './ClickCounter';

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <h1> Here's my super cool click counter</h1>
      <ClickButton handleClick={handleClick} />
      <ClickCounter counter={counter} />
    </div>
  );
}

export default App;
