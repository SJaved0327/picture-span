//========== REACT ==========//

import React from 'react';
import ReactDOM from 'react-dom';

//========== STYLE ==========//

import './index.css';

//========== COMPONENTS ==========//

import App from './App';

//========== RENDER PAGE ==========//

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.querySelector('#root'));

registerServiceWorker();
