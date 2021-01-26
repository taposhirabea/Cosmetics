import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';

import Home from './components/pages/home';
import NotFound from './components/pages/notFound';
import NavBar from './components/navBar';
import Product from './components/Product/product';
import Account from './components/pages/account';
import ProductDetails from './components/Product/productDetails';

class App extends Component {
  render() {
  return (
    <React.Fragment>
    <NavBar/>
    <main className="container">
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/product" component={Product}/>
        <Route path="/item/:id" children={<ProductDetails></ProductDetails>}/>
        <Route path="/account" component={Account}/>
        <Route path="/not-found" component={NotFound}/>
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </main>
    </React.Fragment>
  );
}
}

export default App;
