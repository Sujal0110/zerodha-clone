import React from "react";
import { NavLink, Link } from "react-router-dom";

function Footer() {
    return (
        <footer
            className="border-top mt-5"
            style={{ backgroundColor: "rgb(250, 250, 250)" }}>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-3">
                        <NavLink className="navbar-brand" to="/">
                            <img
                                src="media/images/logo.svg"
                                alt=""
                                style={{ width: "50%" }}
                            />
                        </NavLink>
                        <p className="mt-3" style={{ fontSize: "12px" }}>
                            &copy; 2010 - 2024, Not Zerodha Broking Ltd.
                            <br /> All rights reserved.
                        </p>
                    </div>
                    <div className="col-3">
                        <p>Company</p>
                        <Link
                            className="d-block mb-4 text-decoration-none text-muted"
                            style={{ fontSize: "14px" }}
                            to="">
                            About
                        </Link>
                        <Link
                            className="d-block mb-4 text-decoration-none text-muted"
                            style={{ fontSize: "14px" }}
                            to="">
                            Products
                        </Link>
                        <Link
                            className="d-block mb-4 text-decoration-none text-muted"
                            style={{ fontSize: "14px" }}
                            to="">
                            Pricing
                        </Link>
                        <Link
                            className="d-block mb-4 text-decoration-none text-muted"
                            style={{ fontSize: "14px" }}
                            to="">
                            Referral programme
                        </Link>

                        <Link
                            className="d-block mb-4 text-decoration-none text-muted"
                            style={{ fontSize: "14px" }}
                            to="">
                            Careers
                        </Link>
                        <Link
                            className="d-block mb-4 text-decoration-none text-muted"
                            style={{ fontSize: "14px" }}
                            to="">
                            Zerodha.tech
                        </Link>
                        <Link
                            className="d-block mb-4 text-decoration-none text-muted"
                            style={{ fontSize: "14px" }}
                            to="">
                            Press & media
                        </Link>
                        <Link
                            className="d-block mb-4 text-decoration-none text-muted"
                            style={{ fontSize: "14px" }}
                            to="">
                            Zerodha cares (CSR)
                        </Link>
                    </div>
                    <div className="col-3">
                        <p>Support</p>
                        <Link
                            className="d-block mb-4 text-decoration-none text-muted"
                            style={{ fontSize: "14px" }}
                            to="">
                            Contact
                        </Link>
                        <Link
                            className="d-block mb-4 text-decoration-none text-muted"
                            style={{ fontSize: "14px" }}
                            to="">
                            Support portal
                        </Link>
                        <Link
                            className="d-block mb-4 text-decoration-none text-muted"
                            style={{ fontSize: "14px" }}
                            to="">
                            Z-Connect blog
                        </Link>
                        <Link
                            className="d-block mb-4 text-decoration-none text-muted"
                            style={{ fontSize: "14px" }}
                            to="">
                            List of charges
                        </Link>
                        <Link
                            className="d-block mb-4 text-decoration-none text-muted"
                            style={{ fontSize: "14px" }}
                            to="">
                            Downloads & resources
                        </Link>
                    </div>
                    <div className="col-3">
                        <p>Account</p>
                        <Link
                            className="d-block mb-4 text-decoration-none text-muted"
                            style={{ fontSize: "14px" }}
                            to="">
                            Open an account
                        </Link>
                        <Link
                            className="d-block mb-4 text-decoration-none text-muted"
                            style={{ fontSize: "14px" }}
                            to="">
                            Fund transfer
                        </Link>
                        <Link
                            className="d-block mb-4 text-decoration-none text-muted"
                            style={{ fontSize: "14px" }}
                            to="">
                            60 day challenge
                        </Link>
                    </div>
                </div>
                <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
                    <p>
                        Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI
                        Registration no.: INZ000031633 CDSL: Depository services
                        through Zerodha Securities Pvt. Ltd. – SEBI Registration
                        no.: IN-DP-100-2015 Commodity Trading through Zerodha
                        Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
                        no.: INZ000038238 Registered Address: Zerodha Broking
                        Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
                        Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
                        Karnataka, India. For any complaints pertaining to
                        securities broking please write to
                        complaints@zerodha.com, for DP related to
                        dp@zerodha.com. Please ensure you carefully read the
                        Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>
                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register
                        on SCORES portal. Mandatory details for filing
                        complaints on SCORES: Name, PAN, Address, Mobile Number,
                        E-mail ID. Benefits: Effective Communication, Speedy
                        redressal of the grievances
                    </p>
                    <p>
                        Investments in securities market are subject to market
                        risks; read all the related documents carefully before
                        investing.
                    </p>
                    <p>
                        "Prevent unauthorised transactions in your account.
                        Update your mobile numbers/email IDs with your stock
                        brokers. Receive information of your transactions
                        directly from Exchange on your mobile/email at the end
                        of the day. Issued in the interest of investors. KYC is
                        one time exercise while dealing in securities markets -
                        once KYC is done through a SEBI registered intermediary
                        (broker, DP, Mutual Fund etc.), you need not undergo the
                        same process again when you approach another
                        intermediary." Dear Investor, if you are subscribing to
                        an IPO, there is no need to issue a cheque. Please write
                        the Bank account number and sign the IPO application
                        form to authorize your bank to make payment in case of
                        allotment. In case of non allotment the funds will
                        remain in your bank account. As a business we don't give
                        stock tips, and have not authorized anyone to trade on
                        behalf of others. If you find anyone claiming to be part
                        of Zerodha and offering such services, please create a
                        ticket here.
                    </p>
                    <div className="d-flex gap-5 justify-content-center my-5 text-muted">
                        <span>NSE</span>
                        <span>BSE</span>
                        <span>MCX</span>
                        <span>Tearms and conditions</span>
                        <span>Policies and procedures</span>
                        <span>Privacy Policies</span>
                        <span>Disclosure</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
