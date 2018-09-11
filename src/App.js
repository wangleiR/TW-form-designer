import React, { Component } from 'react';
import './App.css';
import Data from './dataStore/data';
import ItemList from './web/ItemList';
import ShoppingCart from './web/ShoppingCart';
import Button from "react-bootstrap/es/Button";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Data,
            isListPage: true,
            cart: []
        };
    }

    isShowListPage = () => {
        this.setState({isListPage: true});
    };

    isShowShoppingCartPage = () => {
        this.setState({isListPage: false});
    };

    addToCart = item => {
      this.setState({cart:[...this.state.cart,item]});
    };

  render() {
    return (
        <div className="container">
            <Button bsStyle="info" onClick={this.isShowListPage}>List</Button>
            <Button bsStyle="info" onClick={this.isShowShoppingCartPage}>ShoppingCart</Button>
            {this.state.isListPage ? (
                <ItemList
                    list={this.state.items}
                    addToCart ={this.addToCart}
                />
            ) : (
                <ShoppingCart
                    list={this.state.cart}
                />
            )}
        </div>
    );
  }
}

export default App;
