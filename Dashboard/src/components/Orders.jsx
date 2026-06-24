import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3002/orders/allOrders", {
                withCredentials: true,
            })
            .then((res) => {
                setAllOrders(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [allOrders]);

    return (
        <>
            <h3 className="title">Orders ({allOrders.length})</h3>

            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Qty.</th>
                            <th>Price</th>
                            <th>Mode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders.map((stock, index) => {
                            return (
                                <tr key={index}>
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>{stock.price}</td>
                                    <td>{stock.mode}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Orders;
