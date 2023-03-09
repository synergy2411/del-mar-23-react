import LifeCycle from './Components/Demo/LifeCycle';
import Expenses from './Components/Expenses/Expenses';


import React, { Component } from 'react';

class App extends Component {
  state = { toggle: true }
  render() {
    return (
      <div>
        <h1>My Awesome App</h1>
        <button onClick={() => this.setState({ toggle: !this.state.toggle })} className="btn btn-success">
          Show Component</button>
        {this.state.toggle && <LifeCycle />}
        {/* <Expenses /> */}
      </div>
    );
  }
}

export default App;

