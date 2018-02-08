import { Router } from 'express';

const router = Router({ mergeParams: true });

router.all('/', (req, res, next) => {
	const response = {
		error: null,
		message: 'ping',
		data: {
			method: req.method,
			query: req.query,
		},
	};

	if (req.query.key) {
		response.data['key'] = req.query.key;
		response.data['authorized'] = false;
	}

	res.json(response);
});

export default router;