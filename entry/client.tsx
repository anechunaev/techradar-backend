import { render } from 'react-dom';
import App from 'src/common/App';

type Options = {
    reactRootId: string;
    apiKey: string;
    apiHost: string;
};

export function run({ reactRootId, apiKey, apiHost }: Options) {
    console.log(`Running techradar with key ${apiKey} and host ${apiHost}`);

    render(App, document.getElementById(reactRootId));
}