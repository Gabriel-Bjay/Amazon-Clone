import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import Header from './components/layout/Header';
import ProductDetails from './components/ProductDetails';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './components/Login';
import ShoppingContext from './components/context/shopping/shoppingContext';
import NotFound from './components/NotFound';
import { useEffect, useContext } from 'react';
import { auth } from './firebase';
import CheckoutProduct from './components/CheckoutProduct';


const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser} = shoppingContext
  useEffect( ()=> {
    auth.onAuthStateChanged((authUser)=>{
       console.log("User Is ->", authUser);

       if (authUser) {
        setUser (authUser)
       }else{
        setUser(null)
       }
    });
  }, [])
  return (
    <>
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
            <Route path = '/checkout-product'>
              <CheckoutProduct/>
            </Route>
            <Route path = '/login'>
              <Login/>
            </Route>
            <Route path ="*">
              <NotFound/>
            </Route>
      </Switch>
          
      </main>
    </>
  );
}

export default App;
