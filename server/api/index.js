const router = require("express").Router();
const authRouter = require("./auth/authRouter");
const userRouter = require("./userRouter");

const validateToken = require("./middleware");

router.use("/auth", authRouter);
router.use("/user", validateToken, userRouter);

module.exports = router;
