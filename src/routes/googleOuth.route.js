import express from "express";
import googleAuth from "../controllers/googleOauth";
import generateToken from "../utils/genToken";

const googleRouter = express.Router();

export const userToken = async (req, res) => {
  const token = generateToken({
    id: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
  });
 res.status(200).json({
   token,
   user: req.user,
 });
};

googleRouter.use(googleAuth.initialize());
googleRouter.get(
  "/google",
  googleAuth.authenticate("google", { scope: ["profile", "email"] })
);
googleRouter.get(
  "/google/callback",
  googleAuth.authenticate("google"),
 
  userToken
);
export default googleRouter;

