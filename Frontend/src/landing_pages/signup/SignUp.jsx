import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const notify = (msg) => toast.error(msg);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/auth/signup`,
                formData,
                {
                    withCredentials: true,
                },
            );

            if (res.data.success) {
                setFormData({
                    username: "",
                    email: "",
                    password: "",
                });
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                window.location.href =
                    "https://zerodha-dashboard-xi-six.vercel.app";
            }
            notify(res.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="container" style={{ width: "50%" }}>
            <form className="row" onSubmit={handleSubmit}>
                <h1 className="mt-4" style={{ width: "30%", margin: "0 auto" }}>
                    Sign Up
                </h1>

                <div className="mt-5">
                    <label
                        htmlFor="exampleInputUserName"
                        className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        id="exampleInputUserName"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="my-5">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={handleChange}
                        value={formData.password}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary fs-5"
                    style={{ width: "20%", margin: "0 auto" }}>
                    Sign up
                </button>
                <p className="text-center mt-3">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default SignUp;
