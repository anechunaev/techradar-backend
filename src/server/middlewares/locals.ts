import { assign } from 'lodash';

export default (data) => (req, res, next) => {
	assign(res.locals, data);
	next();
}