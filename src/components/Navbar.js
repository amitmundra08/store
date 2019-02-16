import React, { Component } from "react";

import { Link } from "react-router-dom";
import Logo from "../design.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class Navbar extends Component {
    state = {};
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/products">
                    <img src={Logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-2">
                        <Link to="/products" className="nav-link ">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" /> my cart
                        </span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

export default Navbar;
const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainDark) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;
