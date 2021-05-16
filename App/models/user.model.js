var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	given_name: String,
	family_name: String,
	picture: String,
	email: {
		type: String,
		required: [true, 'email required'],
		unique: [true, 'email already registered']
	},
	googleId: {
		type: String,
		default: null
	}
}, {
	timestamps: true
});
module.exports = mongoose.model('user', UserSchema);