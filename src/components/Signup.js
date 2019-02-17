import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

class Signup extends Component {
    state = {
        email: "",
        password: "",
        emailError: false,
        passwordError: false,
        confirmPassword: "",
        confirmPasswordError: false,
        name: ""
    };
    validate = (text, type) => {
        let email = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;
        if (type === "email") {
            console.log(text);
            if (email.test(text)) {
                this.setState({
                    email: text,
                    emailError: false
                });
            } else {
                this.setState({
                    email: text,
                    emailError: true
                });
            }
        }

        let password = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
        if (type === "password") {
            console.log(text);
            if (password.test(text)) {
                this.setState({
                    password: text,
                    passwordError: false
                });
            } else {
                this.setState({
                    password: text,
                    passwordError: true
                });
            }
        }

        if (type === "confirm-password") {
            console.log(text);
            if (this.state.password === text) {
                this.setState({
                    confirmPassword: text,
                    confirmPasswordError: false
                });
            } else {
                this.setState({
                    confirmPassword: text,
                    confirmPasswordError: true
                });
            }
        }

        if (type === "name") {
            console.log(text);
            if (text.length > 0) {
                this.setState({
                    name: text,
                    nameError: false
                });
            } else {
                this.setState({
                    name: text,
                    nameError: true
                });
            }
        }
    };

    login = () => {
        console.log("login pressed");
        if (this.state.email.length === 0) {
            this.setState({ emailError: true });
        }
        if (this.state.password.length === 0) {
            this.setState({ passwordError: true });
        }
        if (this.state.confirmPassword.length === 0) {
            this.setState({ confirmPasswordError: true });
        }
        if (this.state.name.length === 0) {
            this.setState({ nameError: true });
        }
        // return <Link to="/products" />;
    };
    render() {
        let {
            password,
            email,
            passwordError,
            emailError,
            confirmPassword,
            confirmPasswordError,
            name,
            nameError
        } = this.state;

        return (
            <LoginWrapper>
                <div className="col-lg-4 col-sm-12 col-md-8 mx-auto mt-5 py-5  card">
                    <div className="container">
                        <label>
                            <b>Name</b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            name="uname"
                            required
                            onChange={event =>
                                this.validate(event.target.value, "name")
                            }
                        />
                        {nameError === true ? (
                            <div className="mb-2 text-red">
                                Please enter a valid name
                            </div>
                        ) : null}
                        <label>
                            <b>Email</b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter email"
                            name="uname"
                            required
                            onChange={event =>
                                this.validate(event.target.value, "email")
                            }
                        />
                        {this.state.emailError === true ? (
                            <div className="mb-2 text-red">
                                Please enter a valid email
                            </div>
                        ) : null}

                        <label>
                            <b>Password</b>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="psw"
                            required
                            onChange={event =>
                                this.validate(event.target.value, "password")
                            }
                        />
                        {this.state.passwordError === true ? (
                            <div className="mb-2 text-red">
                                Password must contain ateast 8 characters , At
                                least one Capital, Special character , Digit,
                                Alphabet
                            </div>
                        ) : null}
                        <label>
                            <b>Confirm Password</b>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Cofirm Password"
                            name="cpsw"
                            required
                            onChange={event =>
                                this.validate(
                                    event.target.value,
                                    "confirm-password"
                                )
                            }
                        />
                        {this.state.confirmPasswordError === true ? (
                            <div>
                                <div className="mb-2 text-red">
                                    Password and confirm password do not match
                                </div>
                            </div>
                        ) : null}

                        {email.length > 0 &&
                        password.length > 0 &&
                        confirmPassword.length > 0 &&
                        emailError === false &&
                        passwordError === false &&
                        name.length > 0 &&
                        confirmPasswordError === false ? (
                            <Link to="/login">
                                <ButtonContainer
                                    className="btn-block mt-3"
                                    onClick={() => this.login()}
                                >
                                    Signup
                                </ButtonContainer>
                            </Link>
                        ) : (
                            <ButtonContainer
                                className="btn-block mt-3"
                                onClick={() => this.login()}
                            >
                                Signup
                            </ButtonContainer>
                        )}
                    </div>
                    <Link to="/">
                        <div className="text-center">
                            <span>Back to </span>login
                        </div>
                    </Link>
                </div>
            </LoginWrapper>
        );
    }
}

export default Signup;

const LoginWrapper = styled.div`
    input[type="text"],
    input[type="password"] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    .btn-block {
        width: 100%;
        padding: 12px 20px;
    }
    /* Center the avatar image inside this container */
    .imgcontainer {
        text-align: center;
        margin: 24px 0 12px 0;
    }

    /* Avatar image */
    img.avatar {
        width: 40%;
        border-radius: 50%;
    }

    /* Add padding to containers */
    .container {
        padding: 16px;
    }

    /* The "Forgot password" text */
    span.psw {
        float: right;
        padding-top: 16px;
    }

    /* Change styles for span and cancel button on extra small screens */
    @media screen and (max-width: 300px) {
        span.psw {
            display: block;
            float: none;
        }
        .cancelbtn {
            width: 100%;
        }
    }
`;
