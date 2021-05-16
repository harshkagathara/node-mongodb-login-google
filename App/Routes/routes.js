module.exports = (app) => {
	const passport = require('passport');
	const isLoggedIn = require('../Middleware/isLogin');
	app.get('/', (req, res) => res.render('index'))
	app.get('/failed', (req, res) => res.send('You Failed to log in!'))
	app.get('/success', isLoggedIn, (req, res) => {
		res.render("profile", {
				given_name:req.user.given_name,	
				family_name:req.user.family_name,
				pic: req.user.picture,
				email: req.user.email
		})
	})
	app.get('/google', passport.authenticate('google', {
		scope: ['profile', 'email']
	}));
	app.get('/google/callback', passport.authenticate('google', {
		failureRedirect: '/failed'
	}), function(req, res) {
		res.redirect('/success');
	});
	app.get('/logout', (req, res) => {
		req.session = null;
		req.logout();
		res.redirect('/');
	})
}