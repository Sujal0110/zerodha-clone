const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const holdingsRoute = require("./Routes/HoldingsRoute");
const positionsRoute = require("./Routes/PositionsRoute");
const orderRoute = require("./Routes/OrderRoute");
const { userVerification } = require("./Middlewares/AuthMiddleware");

const app = express();
const port = process.env.PORT || 3002;
app.use(
    cors({
        origin: ["http://localhost:5173", "http://localhost:5174"],
        credentials: true,
    }),
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//DB Connetion
const dbUrl = process.env.MONGO_URL;
main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(dbUrl);
}

app.use("/auth", authRoute);
app.use("/holdings", userVerification, holdingsRoute);
app.use("/allPositions", userVerification, positionsRoute);
app.use("/orders", userVerification, orderRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
