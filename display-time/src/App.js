import logo from './logo.svg';
import './App.css';

function App() {
const myTime=new Date().toLocaleTimeString()

  return (
    <div className="App">
      <h2>here is time {myTime}</h2>
    </div>
  );
}

export default App;
