import { render } from 'solid-js/web';

import './index.css';
import App from './App';

if (typeof window !== 'undefined') {
  import('./pwa');
}

render(() => <App />, document.getElementById('root'));
