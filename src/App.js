import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Modal from "./components/Modal";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <Navbar /> */}
                <Switch>
                    <Route exact path="/" component={Login} />

                    <Route path="/products" component={ProductList} />

                    <Route path="/details" component={Details} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />

                    <Route component={Default} />
                </Switch>
                <Modal />
            </React.Fragment>
        );
    }
}

export default App;
