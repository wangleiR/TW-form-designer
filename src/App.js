import React, { Component } from 'react';
import './App.css';
import Data from './dataStore/data';
import ItemList from './web/ItemList';
import ShoppingCart from './web/ShoppingCart';

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
            <button onClick={this.isShowListPage}>List</button>
            <button onClick={this.isShowShoppingCartPage}>ShoppingCart</button>
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
