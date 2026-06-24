import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
    const [stockQuantity, setStockQuantity] = useState();
    const [stockPrice, setStockPrice] = useState(0.0);

    useEffect(() => {
        axios
            .get(`http://localhost:3002/holdings/${uid}`)
            .then((res) => {
                setStockQuantity(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [uid]);

    const generalContext = useContext(GeneralContext);

    const handleSellClick = () => {
        axios.post(
            "http://localhost:3002/orders/newOrder",
            {
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
                mode: "SELL",
            },
            {
                withCredentials: true,
            },
        );

        generalContext.closeSellWindow();
    };

    const handleCancelClick = () => {
        generalContext.closeSellWindow();
    };

    return (
        <div className="container" id="sell-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(e.target.value)}
                            value={stockQuantity}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            onChange={(e) => setStockPrice(e.target.value)}
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <button className="btn btn-red" onClick={handleSellClick}>
                        Sell
                    </button>
                    <button
                        to=""
                        className="btn btn-grey"
                        onClick={handleCancelClick}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;
