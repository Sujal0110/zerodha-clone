import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="container border-bottom">
            <div className="row text-center mt-5">
                <h1 className="mb-3">Technology</h1>
                <h2 className="fs-5 mb-3 text-muted">
                    Sleek, morden and intuitive trading platforms
                </h2>
                <p className="mb-5">
                    Check out our{" "}
                    <Link style={{ textDecoration: "none" }} to="">
                        investment offering{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Hero;
