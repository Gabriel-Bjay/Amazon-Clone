import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Products from './components/Products';
import Header from './components/layout/Header';
import ProductDetails from './components/ProductDetails';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './components/Login';
import ShoppingContext from './components/context/shopping/shoppingContext';
import NotFound from './components/NotFound';
import { useEffect, useContext } from 'react';
import { auth } from './firebase';
import Checkout from './components/CheckoutProduct'
import Payment from './components/Payment';

const promise = loadStripe(
  "pk_test_51N1As3DRIsEHj72wieVYAegm39q9x0vV55rklaY9Yf9cV0zyKx7aXGZdeEu1iFs8V4Yxg06uojL8xQ4dASCnuSdb00GhlNGjJN"
); 


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
            <Route path = '/checkout'>
              <Checkout/>
            </Route>
            <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
