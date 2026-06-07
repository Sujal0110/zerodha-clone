import React from "react";
import { Link } from "react-router-dom";

function Education() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img
                        src="media/images/education.svg"
                        alt=""
                        style={{ width: "70%" }}
                    />
                </div>
                <div className="col-6 p-5">
                    <h1 className="fs-2 mb-5">
                        Free and open market education
                    </h1>
                    <div className="mb-5">
                        <p>
                            Varsity, the largest online stock market education
                            book in the world covering everything from the
                            basics to advanced trading.
                        </p>
                        <Link to="">
                            Versity <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                    <div>
                        <p>
                            TradingQ&A, the most active trading and investment
                            community in India for all your market related
                            queries.
                        </p>
                        <Link to="">
                            TradingQ&A{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
