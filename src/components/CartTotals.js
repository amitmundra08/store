import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
    const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/products">
                            <button
                                onClick={() => clearCart()}
                                className="btn btn-outline-danger mb-3 px-5 text-capitalize"
                            >
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal : <strong>Rs. {cartSubtotal}</strong>
                            </span>
                        </h5>

                        <h5>
                            <span className="text-title">
                                tax : <strong>Rs. {cartTax}</strong>
                            </span>
                        </h5>

                        <h5>
                            <span className="text-title">
                                total : <strong>Rs. {cartTotal}</strong>
                            </span>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
