import React, { Component } from "react";

class Footer extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <div className="col-12 mx-auto py-5 px-5 bg-theme">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div
                                className="bg-red"
                                style={{
                                    fontSize: "18px",
                                    padding: "10px"
                                }}
                            >
                                Our Stores
                            </div>
                            <div
                                style={{
                                    fontSize: "14px",
                                    padding: "10px"

                                    // background: "red"
                                }}
                            >
                                <p class="text-muted">ABC Shopping</p>
                                <p class="text-muted">New Shopping</p>

                                <p class="text-muted">Fizo Shopping</p>
                                <p class="text-muted">ABC Shopping</p>
                            </div>
                        </div>

                        {/* //second col */}

                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div
                                className="bg-red"
                                style={{
                                    fontSize: "18px",
                                    padding: "10px"
                                }}
                            >
                                Info
                            </div>
                            <div
                                style={{
                                    fontSize: "14px",
                                    padding: "10px"

                                    // background: "red"
                                }}
                            >
                                <p class="text-muted">Apple de cliente</p>
                                <p class="text-muted">Portios de avios</p>
                            </div>
                        </div>

                        {/* //third col */}

                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div
                                className="bg-red"
                                style={{
                                    fontSize: "18px",
                                    padding: "10px"
                                }}
                            >
                                Social
                            </div>
                            <div
                                style={{
                                    fontSize: "14px",
                                    padding: "10px"

                                    // background: "red"
                                }}
                            >
                                <p class="text-muted">
                                    <i
                                        style={{
                                            fontSize: "22px",
                                            color: "blue"
                                        }}
                                        className="fab fa-facebook-square"
                                    />
                                    <span className="pl-1">Facebook</span>
                                </p>
                                <p class="text-muted">
                                    <i
                                        style={{
                                            fontSize: "22px",
                                            color: "red"
                                        }}
                                        className="fab fa-instagram"
                                    />
                                    <span className="pl-1">Instagram</span>
                                </p>
                                <p class="text-muted">
                                    <i
                                        style={{
                                            fontSize: "20px",
                                            color: "blue"
                                        }}
                                        className="fab fa-twitter"
                                    />
                                    <span className="pl-1">Twitter</span>
                                </p>
                                <p class="text-muted">
                                    <i
                                        style={{
                                            fontSize: "20px",
                                            color: "red"
                                        }}
                                        className="fab fa-pinterest"
                                    />
                                    <span className="pl-1">Pinterest</span>
                                </p>
                            </div>
                        </div>

                        {/* //fourth col */}

                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div
                                className="bg-red"
                                style={{
                                    fontSize: "18px",
                                    padding: "10px"
                                }}
                            >
                                New & Updates
                            </div>
                            <div
                                style={{
                                    fontSize: "14px",
                                    padding: "10px"

                                    // background: "red"
                                }}
                            >
                                <p class="text-muted">
                                    Get the latest new of the best deals, new
                                    release and many more
                                </p>
                                <input
                                    style={{
                                        width: "100%",
                                        height: "40px",
                                        paddingLeft: "10px"
                                    }}
                                    name="email"
                                    type="text"
                                    placeholder="Enter your email address"
                                />
                                <button
                                    style={{
                                        paddingLeft: "20px",
                                        paddingRight: "20px",
                                        width: "100%",
                                        background: "rgba(255,0,0,0.7)"
                                    }}
                                    className="mt-2 btn btn-danger px-5"
                                >
                                    SIGNUP
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;
