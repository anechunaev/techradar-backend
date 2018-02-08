import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import App from 'src/common/App';

const AppComponent = () => <div id="app">{App}</div>;

export default (req, res, next) => {
	res.send(`<!DOCTYPE html>\n${ReactDOMServer.renderToStaticMarkup(
		<html lang="ru">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<title>TechRadar</title>
				<link rel="shortcut icon" href="/favicon.ico" />
			</head>
			<body>
				<AppComponent />
				<script src="/dist/client.js" />
				<script dangerouslySetInnerHTML={{__html: `techradar.run({ reactRootId: 'app', apiKey: '1337', apiHost: '/' })`}} />
			</body>
		</html>
	)}`);
}