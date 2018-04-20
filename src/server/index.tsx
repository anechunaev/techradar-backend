import * as express from 'express';
import * as morgan from 'morgan';
import { errorHandler, locals } from './middlewares';
import router from './routes';
import { connect } from 'mongoose';
import { init as initModels } from './models';

declare const process: any;

const app = express();

const PORT = process.env.PORT || '3000';
const HOST = process.env.HOST || '0.0.0.0';
const ENV = process.env.ENV || 'production';

connect('', (err) => {
	if (err) throw err;

	initModels();

	//process.on('unhandledRejection', logToFile); // @TODO log errors to DB
	//process.on('uncaughtException', logToFile);

	app.use(locals({ environment: ENV, port: PORT }));
	app.use(morgan('tiny'));
	app.use('/', express.static('static'));
	app.use('/dist', express.static('dist'));
	app.use('/', router);

	//app.use(logToFile); // @TODO save req to DB
	app.use(errorHandler);

	app.listen(PORT, HOST, () => {
		console.log(`📡  Server started at http://${HOST}:${PORT} in ${ENV} environment`);
	});
});