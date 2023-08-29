import React, { Component } from 'react';
import './App.css';
import QuoteMachine from './QuoteMachine'; // QuoteMachine bileşenini içe aktarın

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuoteMachine /> {/* QuoteMachine bileşenini burada kullanın */}
      </div>
    );
  }
}

export default App;
