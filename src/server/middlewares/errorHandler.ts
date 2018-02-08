export default (err, req, res, next) => {
	const type = err.statusCode || err.status || 500;

	console.log(err);

	if (req.xhr) {
		res.status(type).send({ error: type, message: err.message || 'Server went to eternal sleep' });
	} else {
		res.send(`<h1>${type}</h1><p>${err.message || 'Server went to eternal sleep'}</p>`);
	}
};