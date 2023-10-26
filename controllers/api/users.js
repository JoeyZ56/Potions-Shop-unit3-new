// /controllers/api/users.js

const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const checkToken = (req, res) => {
	console.log('req.user', req.user);
	res.json(req.exp);
};

const dataController = {
	async signUp(req, res, next) {
		try {
			console.log('create');
			const user = await User.create(req.body);

			// token will be a string
			const token = createJWT(user);
			// send back the token as a string
			// which we need to account for
			// in the client

			res.locals.data.user = user;
			res.locals.data.token = token;
			next();
		} catch (e) {
			console.log('you got a database problem');
			res.status(400).json({ message: e.message });
		}
	},
	async login(req, res, next) {
		try {
			const user = await User.findOne({ email: req.body.email });
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}

			const match = await bcrypt.compare(req.body.password, user.password);
			if (!match) {
				return res.status(401).json({ message: 'Bad Credentials' });
			}

			res.locals.data.user = user;
			res.locals.data.token = createJWT(user);
			next();
		} catch (error) {
			console.error('Error in login:', error);
			return res.status(500).json({ message: 'Internal Server Error' });
		}
	}
};

const apiController = {
	auth(req, res) {
		res.json(res.locals.data.token);
	}
};

module.exports = {
	checkToken,
	dataController,
	apiController
};

/* -- Helper Functions -- */

function createJWT(user) {
	return jwt.sign(
		// data payload
		{ user },
		process.env.SECRET,
		{ expiresIn: '24h' }
	);
}
