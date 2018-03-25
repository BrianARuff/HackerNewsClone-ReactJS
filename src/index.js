import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//hot module replacement (HMR) for content reloads w/o page reloads

if (module.hot) {
    module.hot.accept();
}