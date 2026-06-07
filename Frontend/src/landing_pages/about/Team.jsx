import React from "react";

function Team() {
    return (
        <div className="container">
            <div className="row border-top mt-5 mb-5">
                <h1 className="text-center mt-5">People</h1>
            </div>
            <div className="row mt-5">
                <div className="col-6 p-5 text-center">
                    <img
                        className="rounded-circle"
                        src="media\images\nithinKamath.jpg"
                        alt=""
                        style={{ width: "60%" }}
                    />
                    <h4 className="mt-4 text-muted">Nithin Kamath</h4>
                    <h6 className="mt-2 text-muted">Founder, CEO</h6>
                </div>
                <div className="col-6 p-5 text-muted lh-lg">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to
                        overcome the hurdles he faced during his decade long
                        stint as a trader. Today, Zerodha has changed the
                        landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory
                        Committee (SMAC) and the Market Data Advisory Committee
                        (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on{" "}
                        <a style={{ textDecoration: "none" }} href="">
                            Homepage
                        </a>{" "}
                        /{" "}
                        <a style={{ textDecoration: "none" }} href="">
                            TradingQnA
                        </a>{" "}
                        /{" "}
                        <a style={{ textDecoration: "none" }} href="">
                            Twitter
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;
