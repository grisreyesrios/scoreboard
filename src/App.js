import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            const Header = () => {
              return (
   <header>
    <h1>Scoreboard</h1>
    <span className="stats">Players: 1</span>
   </header>
  );
}

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Grisell
      </span>
      <Counter />
    </div>  
  );
}

const Counter = () => {
  return (
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">40</span>
        <button className="counter-action increment"> + </button>
     </div>  
  );
}

const App = () => {
  return (
    <div className="scoreboard">
      <Header />
      
     
      <Player />    
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
