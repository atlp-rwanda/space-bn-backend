import express from "express";
import passport from "../middlewares/social.oauth.middleware";
import dotenv from "dotenv";
import {facebookController} from "../controllers/Social.Oauth.controllers";
import redirectAuthRequests,{ facebookMock } from "../middlewares/mock.social";

dotenv.config();
const userRouter = express.Router();

//fake auth route

if(process.env.NODE_ENV === 'test') userRouter.use(redirectAuthRequests)
userRouter.get('/auth/mock',facebookMock,facebookController);

userRouter.get("/auth/facebook", passport.authenticate("facebook"));

userRouter.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {scope: ['public_profile']}),
  facebookController
    // res.redirect(process.env.Facebook_UserURL);

);
export default userRouter;