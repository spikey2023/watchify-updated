const router = require("express").Router();
const authRouter = require("./auth/authRouter");
const userRouter = require("./userRouter");
const userGenreRouter = require("./userGenreRouter");

const validateToken = require("./middleware");

router.use("/auth", authRouter);
router.use("/user", validateToken, userRouter);
router.use("/genres/user", validateToken, userGenreRouter);

module.exports = router;
