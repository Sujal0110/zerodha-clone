import React from "react";
import { Link } from "react-router-dom";

function LeftImage({
    imageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container mt-5 ">
            <div className="row mt-5">
                <div className="col-6">
                    <img style={{ width: "95%" }} src={imageUrl} alt="" />
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <Link
                            style={{
                                marginRight: "50px",
                                textDecoration: "none",
                            }}
                            to={tryDemo}>
                            Try demo{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={learnMore}>
                            Learn more{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                    <div className="mt-3">
                        <Link className="me-3" to={googlePlay}>
                            <img
                                src="media/images/googlePlayBadge.svg"
                                alt=""
                            />
                        </Link>
                        <Link to={appStore}>
                            <img src="media/images/appstoreBadge.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftImage;
