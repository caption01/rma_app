import React from 'react';
import ReactDOM from 'react-dom';

// redux setting
import { Provider } from 'react-redux';
import { store } from './redux/store';

// react router setting
import { BrowserRouter } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

import App from './App';

import './index.css';
import 'antd/dist/antd.css'


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
   , 
    document.getElementById('root'));

serviceWorker.unregister();
