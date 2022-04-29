import logo from './Catdog.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="notavgjoe-link"
          href="https://notavgjoe.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Not Average Joe 
        </a>
        <a
          className="notavgjoe-link"
          href="https://www.youtube.com/watch?v=T6B_eKoz5Sw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Video of us, making the previous NFT
        </a>


      </header>
    </div>
  );
}

export default App;
