import React from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const notify = (msg) => toast.error(msg);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post(
                "http://localhost:3002/auth/login",
                formData,
                {
                    withCredentials: true,
                },
            );

            if (res.data.success) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                setFormData({
                    email: "",
                    password: "",
                });
                window.location.href = "http://localhost:5174";
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
                <h1 className="mt-4" style={{ width: "20%", margin: "0 auto" }}>
                    Login
                </h1>
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
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;
