import React from "react";

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1 className="mb-3">The Zerodha Universe</h1>
                <p className="mb-5">
                    Extend your trading and investment experience even further
                    with our partner platforms
                </p>
                <div className="col-4 mb-5">
                    <img
                        className="mb-3"
                        style={{ width: "50%" }}
                        src="media/images/smallcaseLogo.png"
                        alt=""
                    />
                    <p className="text-small text-muted">
                        Theamathic investment platform
                    </p>
                </div>
                <div className="col-4 mb-5">
                    <img
                        className="mb-3"
                        style={{ width: "40%" }}
                        src="media\images\streakLogo.png"
                        alt=""
                    />
                    <p className="text-small text-muted">
                        Algo & strategy platform
                    </p>
                </div>
                <div className="col-4 mb-5">
                    <img
                        className="mb-3"
                        style={{ width: "50%" }}
                        src="media\images\sensibullLogo.svg"
                        alt=""
                    />
                    <p className="text-small text-muted">
                        Options trading platform
                    </p>
                </div>
                <div className="col-4 mb-5">
                    <img
                        className="mb-3"
                        style={{ width: "50%" }}
                        src="media\images\zerodhaFundhouse.png"
                        alt=""
                    />
                    <p className="text-small text-muted">Asset management</p>
                </div>
                <div className="col-4 mb-5">
                    <img
                        className="mb-3"
                        style={{ width: "50%" }}
                        src="media\images\goldenpiLogo.png"
                        alt=""
                    />
                    <p className="text-small text-muted">
                        Bonds trading platform
                    </p>
                </div>
                <div className="col-4 mb-5">
                    <img
                        className="mb-3"
                        style={{ width: "35%" }}
                        src="media\images\dittoLogo.png"
                        alt=""
                    />
                    <p className="text-small text-muted">
                        Insurence investment platform
                    </p>
                </div>
                <button
                    className="btn btn-primary fs-5"
                    style={{ width: "20%", margin: "0px auto" }}>
                    Sign up now
                </button>
            </div>
        </div>
    );
}

export default Universe;
