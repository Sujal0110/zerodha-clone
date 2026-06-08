import React from "react";

function Hero() {
    return (
        <div className="container">
            <div className="row text-center my-5">
                <h1 className="mb-3">Pricing</h1>
                <h2 className="fs-5 text-muted">
                    Free equity investments and flat ₹20 traday and F&O trades
                </h2>
            </div>
            <div className="row mt-5 p-5 border-top">
                <div className="col mx-3">
                    <img src="media/images/pricingEquity.svg" alt="" />
                    <h1 className="fs-5 mb-3">Free equity delivery</h1>
                    <p className="text-muted">
                        All equity delivery investments (NSE, BSE), are
                        absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="col mx-3">
                    <img src="media/images/intradayTrades.svg" alt="" />
                    <h1 className="fs-5 mb-3">Intraday and F&O trades</h1>
                    <p className="text-muted">
                        Flat Rs. 20 or 0.03% (whichever is lower) per executed
                        order on intraday trades across equity, currency, and
                        commodity trades.
                    </p>
                </div>
                <div className="col mx-3">
                    <img src="media/images/pricingEquity.svg" alt="" />{" "}
                    <h1 className="fs-5 mb-3">Free direct MF</h1>
                    <p className="text-muted">
                        All direct mutual fund investments are absolutely free —
                        ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
