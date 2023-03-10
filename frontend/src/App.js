import LifeCycle from './Components/Demo/LifeCycle';
import Expenses from './Components/Expenses/Expenses';


import React, { Component } from 'react';
import Auth from './Components/Demo/auth';
import Parent from './Components/Demo/Parent';
import AuthContext from './context/auth-context';
import UseStateDemo from './Components/Demo/UseStateDemo';
import UseEffectDemo from './Components/Demo/UseEffectDemo';

class App extends Component {
  state = { toggle: true, isLoggedIn: false }

  changeLogin = (val) => this.setState({ isLoggedIn: val })

  render() {
    return (
      <div>
        <h1>My Awesome App</h1>
        <UseEffectDemo />

        {/* <UseStateDemo /> */}
        {/* <Parent /> */}
        {/* <AuthContext.Provider value={{ isLoggedIn: this.state.isLoggedIn, setIsLoggedIn: this.changeLogin }}>
          <Auth />
          <Expenses />
        </AuthContext.Provider> */}
      </div>
    );
  }
}

export default App;

// eslint-disable-next-line no-lone-blocks
{/* <button onClick={() => this.setState({ toggle: !this.state.toggle })} className="btn btn-success">
Show Component</button>
{this.state.toggle && <LifeCycle />} */}