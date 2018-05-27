import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
