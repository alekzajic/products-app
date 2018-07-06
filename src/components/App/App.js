import React from 'react';
import Header from '../Header'
import './App.css';
import ProductList from '../ProductList/';
import Product from '../Product/';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
    return (
      <Router>
        <div className="app">
          <Header />
          <main className="app__content">
            <Switch>
              <Route exact path='/' component={ProductList} />
              <Route exact path="/products" component={ProductList} />
              <Route path="/products/:productId" component={Product} /> 
            </Switch>
          </main>
        </div>
      </Router>
    );
}

export default App;
