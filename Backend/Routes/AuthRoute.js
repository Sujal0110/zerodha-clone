const {
    Signup,
    getCurrentUser,
    Logout,
} = require("../Controllers/AuthController");
const { Login } = require("../Controllers/AuthController");
const router = require("express").Router();
const { userVerification } = require("../Middlewares/AuthMiddleware");

router.get("/verify", userVerification, (req, res) => {
    res.json({
        success: true,
        user: req.user.username,
    });
});
router.post("/signup", Signup);
router.post("/login", Login);
router.get("/logout", Logout);
router.get("/me", getCurrentUser);

module.exports = router;
