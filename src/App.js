import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
        DIGITAL AGENCY WITH A PASSION FOR MARKETING
        </p>
        <div>
        <span>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Marketing / Social 
        </a>
    </span>
    <span style={{marginLeft: 20}}>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Technology / IOS 
        </a>
        </span>
        </div>
        <p>
        coming soon ...
        </p>
      </header>
    </div>
  );
}

export default App;
