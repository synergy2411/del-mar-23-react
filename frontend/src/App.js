import LifeCycle from './Components/Demo/LifeCycle';
import Expenses from './Components/Expenses/Expenses';


import React, { Component } from 'react';
import Auth from './Components/Demo/auth';
import Parent from './Components/Demo/Parent';
import AuthContext from './context/auth-context';

class App extends Component {
  state = { toggle: true }

  render() {
    return (
      <div>
        <h1>My Awesome App</h1>
        {/* <Parent /> */}
        {/* <Auth /> */}
        <AuthContext.Provider value={{ isLoggedIn: true }}>
          <Expenses />
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;

// eslint-disable-next-line no-lone-blocks
{/* <button onClick={() => this.setState({ toggle: !this.state.toggle })} className="btn btn-success">
Show Component</button>
{this.state.toggle && <LifeCycle />} */}