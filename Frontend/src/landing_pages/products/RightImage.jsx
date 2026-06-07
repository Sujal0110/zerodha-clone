import React from "react";
import { Link } from "react-router-dom";

function RightImage({ imageUrl, productName, productDescription, learnMore }) {
    return (
        <div className="container mt-5 ">
            <div className="row mt-5">
                <div className="col-6 p-5 mt-3">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <Link style={{ textDecoration: "none" }} to={learnMore}>
                            Learn more{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                </div>
                <div className="col-6">
                    <img style={{ width: "95%" }} src={imageUrl} alt="" />
                </div>
            </div>
        </div>
    );
}

export default RightImage;
