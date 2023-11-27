import logo from './logo.svg';
import './App.css';
import Dice from './Components/Dice';
function App() {
  return (
    <div className="App">
      <div className="dice-container">
        <Dice/>
        <Dice/>
      </div>
    </div>
  );
}

export default App;
