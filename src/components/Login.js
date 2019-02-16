import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

class Login extends Component {
    state = {
        email: "",
        password: "",
        emailError: false,
        passwordError: false
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
    };

    login = () => {
        console.log("login pressed");
        if (this.state.email.length === 0) {
            this.setState({ emailError: true });
        }
        if (this.state.password.length === 0) {
            this.setState({ passwordError: true });
        }
        // return <Link to="/products" />;
    };
    render() {
        let { password, email, passwordError, emailError } = this.state;
        console.log(password, email, passwordError, emailError);
        return (
            <LoginWrapper>
                <div className="col-4 mx-auto mt-5 py-5  card">
                    <div className="container">
                        <label>
                            <b>Email</b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Email"
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
                                Password must contain atleast 8 characters , At
                                least one Capital, Special character , Digit,
                                Alphabet
                            </div>
                        ) : null}

                        {email.length > 0 &&
                        password.length > 0 &&
                        emailError === false &&
                        passwordError === false ? (
                            <Link to="/products">
                                <ButtonContainer
                                    className="btn-block mt-3"
                                    onClick={() => this.login()}
                                >
                                    Login
                                </ButtonContainer>
                            </Link>
                        ) : (
                            <div className="d-flex justify-content-center">
                                <ButtonContainer
                                    className="btn-block mt-3"
                                    onClick={() => this.login()}
                                >
                                    Login
                                </ButtonContainer>
                            </div>
                            // <button onClick={() => this.login()} type="submit">
                            //     Login
                            // </button>
                        )}
                    </div>

                    <Link to="/login">
                        <div className="text-center text-green">
                            <span>Forget Password ? </span>
                        </div>
                    </Link>

                    <Link to="/signup">
                        <div className="text-center">
                            <span>Don't have an account ? </span>Signup
                        </div>
                    </Link>
                </div>
            </LoginWrapper>
        );
    }
}

export default Login;

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
