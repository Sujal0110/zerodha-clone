import React from "react";
import { Link } from "react-router-dom";

function pricing() {
    return (
        <div className="container mt-5">
            <div className="row p-5">
                <div className="col-4">
                    <h1 className="fs-2 mb-4">Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price
                        transparency in India. Flat fees and no hidden charges.
                    </p>
                    <Link to="">
                        See pricing <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6 border text-center p-3">
                            <h1 className="mb-3">₹0</h1>
                            <p>
                                Free equity delivery and <br />
                                direct mutual funds
                            </p>
                        </div>
                        <div className="col-6 border text-center p-3">
                            <h1 className="mb-3">₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default pricing;
