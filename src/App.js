import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './components/layout/Home';
import Products from './components/layout/Products';
import Header from './components/layout/Header';
import ProductDetails from './components/layout/ProductDetails';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './components/layout/Login';

const App = () => {
  return (
    <div>
      <Header/>
      <main>
      <Switch>
            <Route path='/'exact>
              <Redirect to='/home'/>
            </Route>
            <Route path = '/home'>
              
                <Home/>
            </Route>
            <Route path = '/products' exact>
              <Products/>
            </Route>
            <Route path = '/products/:id'>
              <ProductDetails/>
            </Route>
            <Route path = '/login'>
              <Login/>
            </Route>
      </Switch>
          
      </main>
    </div>
  );
}

export default App;
