import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Menu = () => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropDownOpened, setIsProfileDropDownOpened] =
        useState(false);

    const [user, setUser] = useState(null);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/auth/me`, {
                withCredentials: true,
            })
            .then((res) => {
                setUser(res.data.user);
            })
            .catch(() => {
                window.location.href = "https://zerodha-frontend-gilt.vercel.app/login";
            });
    }, []);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };
    const handleProfileClick = () => {
        setIsProfileDropDownOpened(!isProfileDropDownOpened);
    };

    const handleLogout = async () => {
        try {
            let res = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/auth/logout`,
                {
                    withCredentials: true,
                },
            );
            if (res.data.success) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                window.location.href = "https://zerodha-frontend-gilt.vercel.app/login";
            }
        } catch (err) {
            console.log(err);
        }
    };

    const menuClass = "menu";
    const activeMenuClass = "menu selected";
    return (
        <div className="menu-container">
            <img src="logo.png" style={{ width: "50px" }} />
            <div className="menus">
                <ul>
                    <li>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/"
                            onClick={() => handleMenuClick(0)}>
                            <p
                                className={
                                    selectedMenu === 0
                                        ? activeMenuClass
                                        : menuClass
                                }>
                                Dashboard
                            </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/orders"
                            onClick={() => handleMenuClick(1)}>
                            <p
                                className={
                                    selectedMenu === 1
                                        ? activeMenuClass
                                        : menuClass
                                }>
                                Orders
                            </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/holdings"
                            onClick={() => handleMenuClick(2)}>
                            <p
                                className={
                                    selectedMenu === 2
                                        ? activeMenuClass
                                        : menuClass
                                }>
                                Holdings
                            </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/positions"
                            onClick={() => handleMenuClick(3)}>
                            <p
                                className={
                                    selectedMenu === 3
                                        ? activeMenuClass
                                        : menuClass
                                }>
                                Positions
                            </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/funds"
                            onClick={() => handleMenuClick(4)}>
                            <p
                                className={
                                    selectedMenu === 4
                                        ? activeMenuClass
                                        : menuClass
                                }>
                                Funds
                            </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/apps"
                            onClick={() => handleMenuClick(5)}>
                            <p
                                className={
                                    selectedMenu === 5
                                        ? activeMenuClass
                                        : menuClass
                                }>
                                Apps
                            </p>
                        </NavLink>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <div
                        className="d-flex align-items-center dropdown-toggle profile"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <div className="avatar me-2">
                            {user?.username?.charAt(0).toUpperCase() || "U"}
                        </div>

                        <p className="username mb-0">
                            {user?.username || "USERID"}
                        </p>
                    </div>

                    <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                            <button
                                className="dropdown-item"
                                onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;
