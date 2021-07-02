import './App.css';
import ClickButton from './ClickButton';
import ClickCounter from './ClickCounter';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1> Here's my super cool click counter</h1>
        <ClickButton />
        <ClickCounter />
      </div>
    </Provider>
  );
}

export default App;
