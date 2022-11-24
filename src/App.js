import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Dog/>
    </div>
  );
}

export default App;

function Dog(){
  console.log ("ciao")
  return (<p>
    I'm a dog! 10+10 = {10+10}
  </p>)
}
