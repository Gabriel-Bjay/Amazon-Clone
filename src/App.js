import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './Home';
import Products from './Products';
import Header from './components/layout/Header';
import ProductDetails from './ProductDetails';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './Login';
import NotFound from './NotFound';

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
            <Route path ="*">
              <NotFound/>
            </Route>
      </Switch>
          
      </main>
    </div>
  );
}

export default App;
