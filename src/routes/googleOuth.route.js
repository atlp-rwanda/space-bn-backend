import express from "express";
import googleAuth from "../controllers/googleOauth";
import generateToken from "../utils/genToken";
const googleRouter = express.Router();
googleRouter.use(googleAuth.initialize());
googleRouter.get(
  "/google",
  googleAuth.authenticate("google", { scope: ["profile", "email"] })
);
googleRouter.get(
  "/google/callback",
  googleAuth.authenticate("google"),
  async (req, res) => {
    const token = generateToken({
      id: req.user.id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
    });
    res.send({
      message: "Google Login Success",
      user: req.user,
      token,
    });
  }
);
export default googleRouter;

