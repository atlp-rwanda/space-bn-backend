import express from "express";

const router = express.Router();

import passport from '../controllers/googleOauth.controler';

const googleRouter = router;

googleRouter.use(passport.initialize())
.get('/google', passport.authenticate('google',{scope:['profile','email']})) 
.get('/google/callback', passport.authenticate('google',{failureRedirect:'/login'}))

export default googleRouter;
