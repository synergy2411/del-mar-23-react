import LifeCycle from './Components/Demo/LifeCycle';
// import Expenses from './Components/Expenses/Expenses';


import React, { Component, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './Components/Demo/auth';
import Parent from './Components/Demo/Parent';
import AuthContext from './context/auth-context';
import UseStateDemo from './Components/Demo/UseStateDemo';
import UseEffectDemo from './Components/Demo/UseEffectDemo';
import UseContextDemo from './Components/Demo/useContextDemo';
import Header from './Components/Header/Header';

const ProductList = React.lazy(() => import('./Components/ProductList/ProductList'));
const ProductItem = React.lazy(() => import('./Components/ProductItem/ProductItem'));
const Expenses = React.lazy(() => import("./Components/Expenses/Expenses"))


class App extends Component {
  state = { toggle: true, isLoggedIn: false }

  changeLogin = (val) => this.setState({ isLoggedIn: val })

  render() {
    return (
      <div className='container'>
        <Header />
        <h1>My Awesome App</h1>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Routes>
            <Route path='/expenses' element={<Expenses />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/life-cycle' element={<LifeCycle />} />
            <Route path='/use-effect-demo' element={<UseEffectDemo />} />
            <Route path='/product-list/*' element={<ProductList />}>
              {/* http://localhost:3000/product-list/p003 */}
              <Route path=':productId' element={<ProductItem />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    );
  }
}

export default App;

// eslint-disable-next-line no-lone-blocks
{/* <button onClick={() => this.setState({ toggle: !this.state.toggle })} className="btn btn-success">
Show Component</button>
{this.state.toggle && <LifeCycle />} */}

// eslint-disable-next-line no-lone-blocks
{/* <AuthContext.Provider value={{ isLoggedIn: this.state.isLoggedIn, setIsLoggedIn: this.changeLogin }}>
          <UseContextDemo />
          <Auth />
          <Expenses />
        </AuthContext.Provider> */}