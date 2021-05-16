const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const UserModel = require('../models/user.model');
require('dotenv').config();

passport.serializeUser(function(user, done) {
	done(null, user);
});
passport.deserializeUser(function(user, done) {
	done(null, user);
});

passport.use(new GoogleStrategy({
	clientID: process.env.ClientID,
	clientSecret: process.env.ClientSecret,
	callbackURL: process.env.CallbackURL,
	passReqToCallback: true
  
}, async function(request, accessToken, refreshToken, profile, done) {
	const currentUser = await UserModel.findOne({
		googleId: profile.id
	});
	if(currentUser) {
		return done(null, currentUser);
	} else {
		const newUser = await new UserModel({
			email: profile.email,
			googleId: profile.id,
			given_name: profile.given_name,
			family_name: profile.family_name,
			picture: profile.picture
		}).save();
		return done(null, newUser);
	}
}));