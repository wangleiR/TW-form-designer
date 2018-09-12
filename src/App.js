import React, { Component } from 'react';
import './App.css';
import Preview from './web/Preview';

class App extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
        <div className="container">
                <Preview />
        </div>
    );
  }
}

export default App;
