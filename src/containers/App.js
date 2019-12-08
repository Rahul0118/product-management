import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import Loader from 'react-loader-spinner';

import ProductList from '../components/Products/ProductList';

import ProductDetails from '../components/ProductDetails/ProductDetails';

import ProductEdit from '../components/ProductEdit/ProductEdit';

import ProductAdd from '../components/ProductAdd/ProductAdd';

//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import 'bootstrap/dist/css/bootstrap.min.css';

//import withClass from '../hoc/withClass';


import './App.css';


class App extends Component{

  renderRouter() {
      return (
        <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/products-details" component={ProductDetails} />
            <Route exact path="/product-edit" component={ProductEdit} />
            <Route exact path="/product-add" component={ProductAdd} />
        </Switch>
      )
  }

      // <Loader
      //    type="Puff"
      //    color="#00BFFF"
      //    height={100}
      //    width={100}
      //    timeout={3000}

      // />

  render () {
    return (
      <div>
        <Router>
            {this.renderRouter()}
        </Router>
      </div>
    );
  }
}


export default App;
