const express = require('express');
const basicAuth = require('express-basic-auth');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');

const app = express();

function myAsyncAuthorizer(username, password, cb) {
	if (
		basicAuth.safeCompare(username, 'admin2') &
		basicAuth.safeCompare(password, '123')
	)
		return cb(null, true);
	else return cb(null, false);
}

function getUnauthorizedResponse(req) {
	return req.auth
		? 'Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected'
		: 'No credentials provided';
}

const auth = basicAuth({
	authorizer: myAsyncAuthorizer,
	authorizeAsync: true,
	unauthorizedResponse: getUnauthorizedResponse,
});

const PORT = process.env.PORT || 5000;

app.use(cookieParser('82e4e438a0705fabf61f9854e3b575af'));

app
	.use(express.static(path.join(__dirname, '/public/build')))
	.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/build/index.html'));
});

app.get('/authenticate', auth, (req, res) => {
	const options = {
		httpOnly: true,
		signed: true,
	};

	console.log(JSON.stringify(req.auth) + ' log');

	if (req.auth.user === 'admin2') {
		const token = jwt.sign({ id: 'admin' }, 'secret', {
			expiresIn: 86400, // expires in 24 hours
		});
		res.cookie('token', token, options).send({ screen: 'admin' });
		return;
	} else if (req.auth.user === 'user') {
		res.cookie('name', 'user', options).send({ screen: 'user' });
		return;
	}

	res.send('not found');
});

app.get('/read-cookie', (req, res) => {
	console.log(JSON.stringify(req.signedCookies));
	jwt.verify(req.signedCookies.token, 'secret', function (err, decoded) {
		if (err)
			return res
				.status(500)
				.send({ auth: false, message: 'Failed to authenticate token.' });
		res.send({ screen: 'admin' });
	});
});

app.get('/clear-cookie', (req, res) => {
	res.clearCookie('token').end();
});

app.get('/get-data', (req, res) => {
	if (req.signedCookies.name === 'admin') {
		res.send('This is admin panel');
	} else if (req.signedCookies.name === 'user') {
		res.send('This is user data');
	} else {
		res.end();
	}
});
