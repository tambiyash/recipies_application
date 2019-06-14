import React, { Component } from 'react';
/*
 We encourage our candidates to over-engineer,
 so please feel free to use any other styling methodology
 e.g., Emotion, Fela, SASS, etc.
 */
import './App.css';
import Routes from './Router/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
