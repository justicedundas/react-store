import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "bulma/css/bulma.css";
import "./App.css";

import Context from "./Context";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import AddProduct from "./components/AddProduct";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      cart: {},
      products: [],
      newProducts: [],
    };
    this.routerRef = React.createRef();
  }

  addProduct = (product, callback) => {};

  async componentDidMount() {
    let user = localStorage.getItem("user");
    let cart = localStorage.getItem("cart");

    const products = await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => response.data);

    // add random stock to each product
    Object.entries(products).forEach(([key, value]) => {
      const amount = Math.floor(Math.random() * 100);
      value.stock = amount;
    });
    // const products = await axios.get("http://localhost:3333/products");
    user = user ? JSON.parse(user) : null;
    cart = cart ? JSON.parse(cart) : {};

    this.setState({
      user,
      products: products,
    });
  }

  addToCart = (cartItem) => {
    let cart = this.state.cart;
    if (cart[cartItem.id]) {
      cart[cartItem.id].amount += cartItem.amount;
      cart[cartItem.id].totalCost += cartItem.amount * cartItem.product.price;
    } else {
      cart[cartItem.id] = cartItem;
      cart[cartItem.id].totalCost = cartItem.amount * cartItem.product.price;
    }
    if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
      cart[cartItem.id].amount = cart[cartItem.id].product.stock;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  removeFromCart = (cartItemId) => {
    let cart = this.state.cart;
    delete cart[cartItemId];
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  clearCart = () => {
    let cart = {};
    localStorage.removeItem("cart");
    this.setState({ cart });
  };

  totalCart = () => {
    let cart = this.state.cart;
    let total = 0;
    Object.keys(cart).forEach((key) => {
      let item = [key];
      total += item.amount * item.product.price;
    });
    return total;
  };

  updateProduct = (key) => {
    let product = this.state.products[key];
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addProduct: this.addProduct,
          addToCart: this.addToCart,
          clearCart: this.clearCart,
          totalCost: this.totalCost,
          checkout: this.checkout,
        }}
      >
        <Router ref={this.routerRef}>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/products" component={ProductList} />
            </Switch>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}
