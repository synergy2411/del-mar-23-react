import LifeCycle from './Components/Demo/LifeCycle';
import Expenses from './Components/Expenses/Expenses';


import React, { Component } from 'react';
import Auth from './Components/Demo/auth';

class App extends Component {
  state = { toggle: true }
  render() {
    return (
      <div>
        <h1>My Awesome App</h1>
        <Auth />
        {/* <Expenses /> */}
      </div>
    );
  }
}

export default App;

// eslint-disable-next-line no-lone-blocks
{/* <button onClick={() => this.setState({ toggle: !this.state.toggle })} className="btn btn-success">
Show Component</button>
{this.state.toggle && <LifeCycle />} */}