





import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import App from './CartPrtc2App';
//import { AppProvider } from './CartContextprtc';
import "./Cart.css"
import { AppProvider } from './CartPrtc2Context';

//import store from "./Store"
//import {Provider} from "react-redux"
//store.subscribe(()=>console.log(store.getState()))
/////import { ProductsProvider } from './context/products_context'
/////import { FilterProvider } from './context/filter_context';

/////import { CartProvider } from './context/cart_context'
/////import { UserProvider } from './context/user_context'
/////import { Auth0Provider } from '@auth0/auth0-react'
//dev-6-a59p6m.us.auth0.com
//dPU8LmhetxgE4iUHQesLAWlHJOroYdAW
ReactDOM.render(
<>
{/*<Auth0Provider
    domain="dev-6-a59p6m.us.auth0.com"
    clientId="dPU8LmhetxgE4iUHQesLAWlHJOroYdAW"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
  <UserProvider>
<BrowserRouter>
<ProductsProvider>
<FilterProvider>
<CartProvider>*/}
<BrowserRouter>
<AppProvider>
  <App/>
  </AppProvider>
  </BrowserRouter>
 {/* </CartProvider>
  </FilterProvider>
</ProductsProvider>
  
</BrowserRouter>
</UserProvider>
</Auth0Provider>
*/}
</>,document.getElementById('root')
  );