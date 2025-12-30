require("dotenv").config();
const express = require("express");
const passport = require("passport");
const connectDB = require("./config/db");
const UserModel = require("./models/user.model");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();
connectDB();

app.use(passport.initialize());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        let existingUser = await UserModel.findOne({
          email: profile.emails[0].value,
        });

        if (existingUser) {
          return cb(null, existingUser);
        }

        let newUser = await UserModel.create({
          name: profile.displayName,
          email: profile.emails[0].value,
          mobile: 9999999999,
          google_id: profile.id,
          profileImg: profile.photos[0].value,
          provider: "google",
        });

        return cb(null, newUser);
      } catch (error) {
        return cb(error, null);
      }
    }
  )
);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    session: false,
  }),
  (req, res) => {
    if (!req.user) {
      return res.redirect("/failure");
    }
    return res.send(req.user.displayName);
  }
);

app.get("/failure", (req, res) => {
  res.send("tumse na ho paega");
});

app.listen(3000, () => {
  console.log("serevr is running on port 3000");
});
