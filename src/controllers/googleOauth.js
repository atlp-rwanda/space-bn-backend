import strategy from "passport-google-oauth";
import passport from "passport";
import models from "../database/models";
const { User } = models;
const GoogleStrategy = strategy.OAuth2Strategy;
export const googleFunction = async (token, tokenSecret, profile, done) => {
  const query = { email: profile._json.email };
  console.log(profile);
  const update = {
    googleId: profile.id,
    firstName: profile._json.given_name,
    lastName: profile._json.family_name,
    email: profile._json.email,
    phoneNumber: null,
  };
  const [user, created] = await User.findOrCreate({
    where: query,
    defaults: update,
  });
  if (created) return done(null, user);
  return done(null, user);
};
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    googleFunction
  )
);
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
User.findById(id, (err, user) => done(err, user));
});
export default passport;
