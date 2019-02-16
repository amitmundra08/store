import React, { Component } from "react";

export default function CartList({ item, value }) {
    // console.log(item, value);
    const { id, img, title, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img
                    className="image-fluid"
                    src={img}
                    style={{ width: "5rem", height: "5rem" }}
                    alt="product"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product : </span> {title}
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price : </span> Rs. {price}
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span
                            className="btn mx-1 btn-black"
                            onClick={() => decrement(id)}
                        >
                            -
                        </span>
                        <span className="btn mx-1 btn-black">{count} </span>
                        <span
                            className="btn mx-1 btn-black"
                            onClick={() => increment(id)}
                        >
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash" />
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total : Rs. {total}</strong>
            </div>
        </div>
    );
}
