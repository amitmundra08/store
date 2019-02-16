import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { ProductConsumer } from "../context";

class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <div className="pl-2">
                                <h2 className="text-capitalize text-blue">
                                    filter by
                                </h2>
                                <CategoryWapper>
                                    <div className="text-bright category-title">
                                        Categories
                                    </div>
                                    <div className="mt-2">
                                        <ProductConsumer>
                                            {value => {
                                                return (
                                                    <div
                                                        className="text-capitalize cart-btn"
                                                        onClick={() =>
                                                            value.filterBy(
                                                                "All",
                                                                "category"
                                                            )
                                                        }
                                                    >
                                                        All
                                                    </div>
                                                );
                                            }}
                                        </ProductConsumer>
                                        <ProductConsumer>
                                            {value => {
                                                // console.log(value.categories);
                                                return value.categories.map(
                                                    category => {
                                                        // console.log(
                                                        //     category.company
                                                        // );
                                                        return (
                                                            <div
                                                                className="text-capitalize cart-btn"
                                                                key={
                                                                    category.id
                                                                }
                                                                onClick={() =>
                                                                    value.filterBy(
                                                                        category.company,
                                                                        "category"
                                                                    )
                                                                }
                                                            >
                                                                {
                                                                    category.company
                                                                }
                                                            </div>
                                                        );
                                                    }
                                                );
                                            }}
                                        </ProductConsumer>
                                    </div>
                                </CategoryWapper>
                                <CategoryWapper className="mt-4">
                                    <div className="text-bright category-title">
                                        Collection
                                    </div>
                                    <div className="mt-1">
                                        <ProductConsumer>
                                            {value => {
                                                return (
                                                    <div
                                                        className="text-capitalize cart-btn"
                                                        onClick={() =>
                                                            value.filterBy(
                                                                "All",
                                                                "collection"
                                                            )
                                                        }
                                                    >
                                                        All
                                                    </div>
                                                );
                                            }}
                                        </ProductConsumer>
                                        <ProductConsumer>
                                            {value => {
                                                // console.log(value.collection);
                                                return value.collection.map(
                                                    collection => {
                                                        // console.log(
                                                        //     collection.collection
                                                        // );
                                                        return (
                                                            <div
                                                                className="text-capitalize cart-btn"
                                                                key={
                                                                    collection.id
                                                                }
                                                                onClick={() =>
                                                                    value.filterBy(
                                                                        collection.collection,
                                                                        "collection"
                                                                    )
                                                                }
                                                            >
                                                                {
                                                                    collection.collection
                                                                }
                                                            </div>
                                                        );
                                                    }
                                                );
                                            }}
                                        </ProductConsumer>
                                    </div>
                                </CategoryWapper>
                                <h2 className="text-capitalize text-blue mt-5">
                                    Sort By
                                </h2>
                                <div>
                                    <ProductConsumer>
                                        {value => {
                                            return (
                                                <CategoryWapper>
                                                    <div
                                                        onClick={() =>
                                                            value.sortBy(
                                                                "latest"
                                                            )
                                                        }
                                                        className="text-capitalize cart-btn"
                                                    >
                                                        Latest
                                                    </div>
                                                    <div
                                                        onClick={() =>
                                                            value.sortBy(
                                                                "oldest"
                                                            )
                                                        }
                                                        className="text-capitalize cart-btn"
                                                    >
                                                        Oldest
                                                    </div>
                                                    <div
                                                        onClick={() =>
                                                            value.sortBy(
                                                                "lowtohigh"
                                                            )
                                                        }
                                                        className="text-capitalize cart-btn"
                                                    >
                                                        Low price to high
                                                    </div>
                                                    <div
                                                        onClick={() =>
                                                            value.sortBy(
                                                                "hightolow"
                                                            )
                                                        }
                                                        className="text-capitalize cart-btn"
                                                    >
                                                        High price to low
                                                    </div>
                                                    <div
                                                        onClick={() =>
                                                            value.sortBy("atoz")
                                                        }
                                                        className="text-capitalize cart-btn"
                                                    >
                                                        A to Z
                                                    </div>
                                                    <div
                                                        onClick={() =>
                                                            value.sortBy("ztoa")
                                                        }
                                                        className="text-capitalize cart-btn"
                                                    >
                                                        Z to A
                                                    </div>
                                                </CategoryWapper>
                                            );
                                        }}
                                    </ProductConsumer>
                                </div>
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="row pr-4">
                                <ProductConsumer>
                                    {value => {
                                        return value.products.map(product => {
                                            return (
                                                <Product
                                                    key={product.id}
                                                    product={product}
                                                />
                                            );
                                        });
                                    }}
                                </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProductList;

const CategoryWapper = styled.div`
    .cart-btn:hover {
        color: var(--mainDark);
        cursor: pointer;
    }
    .cart-btn {
        color: var(--mainYellow);
    }
    .category-title {
        font-size: 24px;
    }
`;
