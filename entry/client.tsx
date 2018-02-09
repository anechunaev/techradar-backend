import { render } from 'react-dom';
import App from 'src/common/App';

type Options = {
	reactRootId: string;
	apiKey: string;
	apiHost: string;
};
declare const DEVELOPMENT: boolean;

export function run({ reactRootId, apiKey, apiHost }: Options) {
	if (DEVELOPMENT) {
		console.log(`Running techradar with API host ${apiHost} and key ${apiKey}`);

		fetch(`http://${apiHost}/api?key=${apiKey}`, { method: 'GET' })
			.then((res) => res.json())
			.then(console.log)
			.catch(console.error);
	}

	render(App, document.getElementById(reactRootId));
}