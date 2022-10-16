import logo from './assets/momentlogo.svg';
import appscreen from './assets/momentmainpage.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Moment-logo" alt="Logo" />
        <p className="Subtitle-text">
          An app for all kinds of communities.<br/>
          Made by students. For students.
          <img src={appscreen} className="Phone-screen" alt="Screen" />
        </p>
      </header>
    </div>
  );
}

export default App;
