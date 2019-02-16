import React, { Component } from "react";

import { storeProducts, detailProduct, categories, collection } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        filteredProducts: [],
        showFilter: false,
        categories: categories,
        collection: collection,
        cart: [],
        modalProduct: detailProduct,
        modalOpen: false,
        cartTax: 0,
        cartSubtotal: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProduct();
    }

    filterBy = (term, type) => {
        console.log(term);
        console.log(type);
        if (type === "collection") {
            if (term === "All") {
                let tproducts = [];
                storeProducts.forEach(item => {
                    const oneItem = { ...item };
                    tproducts = [...tproducts, oneItem];
                });
                this.setState({
                    products: tproducts
                });
            } else {
                let tproducts = [];
                storeProducts.forEach(item => {
                    const oneItem = { ...item };
                    tproducts = [...tproducts, oneItem];
                });
                const fiteredProducts = tproducts.filter(product => {
                    if (product.collection === term) {
                        return product;
                    }
                });
                this.setState({
                    products: fiteredProducts
                });
            }
        } else {
            if (term === "All") {
                let tproducts = [];
                storeProducts.forEach(item => {
                    const oneItem = { ...item };
                    tproducts = [...tproducts, oneItem];
                });
                this.setState({
                    products: tproducts
                });
            } else {
                let tproducts = [];
                storeProducts.forEach(item => {
                    const oneItem = { ...item };
                    tproducts = [...tproducts, oneItem];
                });
                const fiteredProducts = tproducts.filter(product => {
                    if (product.company === term) {
                        return product;
                    }
                });
                this.setState({
                    products: fiteredProducts
                });
            }
        }
    };

    sortBy = type => {
        console.log(type);
        if (type === "lowtohigh") {
            let tproducts = [];
            storeProducts.forEach(item => {
                const oneItem = { ...item };
                tproducts = [...tproducts, oneItem];
            });

            tproducts.sort(function(a, b) {
                return a.price - b.price;
            });
            this.setState({
                products: tproducts
                // showFilter: true
            });
        }
        if (type === "hightolow") {
            let tproducts = [];
            storeProducts.forEach(item => {
                const oneItem = { ...item };
                tproducts = [...tproducts, oneItem];
            });
            tproducts.sort(function(a, b) {
                return b.price - a.price;
            });
            this.setState({ products: tproducts });
        }

        if (type === "atoz") {
            let tproducts = [];
            storeProducts.forEach(item => {
                const oneItem = { ...item };
                tproducts = [...tproducts, oneItem];
            });

            tproducts.sort(function(a, b) {
                var nameA = a.title.toLowerCase(),
                    nameB = b.title.toLowerCase();
                if (nameA < nameB)
                    //sort string ascending
                    return -1;
                if (nameA > nameB) return 1;
                return 0; //default return value (no sorting)
            });
            this.setState({ products: tproducts, showFilter: true });
        }

        if (type === "ztoa") {
            let tproducts = [];
            storeProducts.forEach(item => {
                const oneItem = { ...item };
                tproducts = [...tproducts, oneItem];
            });

            tproducts.sort(function(a, b) {
                var nameA = a.title.toLowerCase(),
                    nameB = b.title.toLowerCase();
                if (nameA > nameB)
                    //sort string ascending
                    return -1;
                if (nameA < nameB) return 1;
                return 0; //default return value (no sorting)
            });
            this.setState({ products: tproducts, showFilter: true });
        }

        if (type === "oldest") {
            let tproducts = [];
            storeProducts.forEach(item => {
                const oneItem = { ...item };
                tproducts = [...tproducts, oneItem];
            });

            tproducts.sort(function(a, b) {
                var dateA = new Date(a.date),
                    dateB = new Date(b.date);
                return dateA - dateB; //sort by date ascending
            });
            console.log(tproducts);
            this.setState({ products: tproducts, showFilter: true });
        }
        if (type === "latest") {
            let tproducts = [];
            storeProducts.forEach(item => {
                const oneItem = { ...item };
                tproducts = [...tproducts, oneItem];
            });
            tproducts.sort(function(a, b) {
                var dateA = new Date(a.date),
                    dateB = new Date(b.date);
                return dateB - dateA; //sort by date ascending
            });
            console.log(tproducts);
            this.setState({ products: tproducts, showFilter: true });
        }
    };

    setProduct = () => {
        let tproducts = [];
        storeProducts.forEach(item => {
            const oneItem = { ...item };
            tproducts = [...tproducts, oneItem];
        });
        this.setState({ products: tproducts });
    };

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState({ detailProduct: product });
    };

    addToCart = id => {
        console.log("add to cart", id);
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(
            () => {
                return {
                    products: tempProducts,
                    cart: [...this.state.cart, product]
                };
            },
            () => this.addTotals()
        );
    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState({ modalProduct: product, modalOpen: true });
    };

    closeModal = () => {
        this.setState({ modalOpen: false });
    };

    increment = id => {
        console.log("calling increment function", id);
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id == id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(
            () => {
                return { cart: [...tempCart] };
            },
            () => {
                this.addTotals();
            }
        );
    };

    decrement = id => {
        console.log("calling decrement function", id);
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id == id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        console.log(product.count);
        product.count = product.count - 1;
        console.log(product.count);

        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState({ cart: [...tempCart] }, () => this.addTotals());
        }
    };

    removeItem = id => {
        console.log("calling remove item", id);

        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        const removedProduct = tempProducts[index];

        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        this.setState(
            () => {
                return {
                    products: [...tempProducts],
                    cart: [...tempCart]
                };
            },
            () => this.addTotals()
        );
    };

    clearCart = () => {
        console.log("clearing cart");
        this.setState({ cart: [] }, () => {
            this.setProduct();
            this.addTotals();
        });
    };

    addTotals = () => {
        console.log("add totals");
        let subTotal = 0;
        console.log(this.state.cart);
        this.state.cart.map(item => (subTotal += item.total));

        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = tax + subTotal;
        console.log(subTotal, tax, total);
        this.setState({
            cartSubtotal: subTotal,
            cartTax: tax,
            cartTotal: total
        });
    };

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    filterBy: this.filterBy,
                    sortBy: this.sortBy,
                    categories: this.state.categories,
                    collection: this.state.collection,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    modalOpen: this.state.modalOpen,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                    cartTax: this.state.cartTax,
                    cartSubtotal: this.state.cartSubtotal,
                    cartTotal: this.state.cartTotal
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

// export default ProductProvider;
