import React, { Component } from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import CartColumn from "./CartColumn";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import Footer from "./Footer";

class Cart extends Component {
    state = {};
    render() {
        return (
            <section>
                <Navbar />
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment className="heightfixer">
                                    <Title name="your" title="cart" />
                                    <CartColumn />
                                    <CartList value={value} />
                                    <CartTotals value={value} />
                                </React.Fragment>
                            );
                        } else {
                            return (
                                <React.Fragment>
                                    <EmptyCart />
                                </React.Fragment>
                            );
                        }
                    }}
                </ProductConsumer>
                {/* <Footer /> */}
            </section>
        );
    }
}

export default Cart;
