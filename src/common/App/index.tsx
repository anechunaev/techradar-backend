import * as React from 'react';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';

export interface IProps {
}

const App = [
	<Helmet>
		<title>Frontend Boilerplate</title>
	</Helmet>,
	<Route exact path="/" component={() => <h1>Index page</h1>} />,
	<Route exact path="/test" component={() => <h1>Test page</h1>} />,
];

export default App;