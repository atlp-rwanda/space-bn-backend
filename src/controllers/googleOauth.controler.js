const passport = require("passport");
const googleOuth = require("passport-google-oauth");
const config = require("../config/config");
const User = require("../database/models").User;


const GoogleStrategy = googleOuth.OAuth2Strategy;

const clientID = config.development.clientID;
const clientSecrety = config.development.clientSecrety;
const callBackURL = config.development.callBackURL;

passport.use(
  new GoogleStrategy(
    {
      clientID,
      clientSecrety,
      callBackURL,
    },

    async (accessToken, refreshToken, profile, done) => {
      const userInfo = {
        platfom: "google",
        profileID: profile.id,                  
        name: profile.displayName,
        email: profile.emails[0].value,
        image: profile.photos[0].value,
      };
      console.log(clientID, clientSecrety,callBackURL);
      const [user, created] = await User.findOrCreate({
        where: profile.emails[0].value,
        defaults: update
      });
      if (created) return done(null, user)
      return done(null, user);
      // try {
      //   let user = await model.user.findOne({ googleId: profile.id });
      //   if (user) {
      //     done(null, user);
      //   } else {
      //     user = await model.user.create(userInfo);
      //     const token = jwt.sign(
      //       JSON.parse(JSON.stringify(user)),
      //       process.env.JWT_KEY,
      //       { expiresIn: "1h" }
      //     );
      //     jwt.verify(token, process.env.JWT_KEY, function (err, user) {
      //       console.log(err, user);
      //     });
      //     done(null, user);
      //     return token;
      //   }
      // } catch (err) {
      //   console.error(err);
      // }
    }
  )
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user));
});
export default passport;
