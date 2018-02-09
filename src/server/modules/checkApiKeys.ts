import { some } from 'lodash';

export default (file) => {
	return (req, res, next) => {
		if (some(file, (key, host) => req.hostname === host && req.query.key === key)) {
			return next();
		}

		res.status(403).json({
			error: 403,
			message: "Access forbidden for this API key or API key not found in query"
		});
	}
}