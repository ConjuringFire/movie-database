import React                        from 'react';
import ReactDOM                     from 'react-dom';
import { Router, HashRouter }       from 'react-router-dom';
import { Provider }                 from 'react-redux';

import store                        from './redux/store';
import App                          from './App';

import './index.css';
import './bootstrap.min.css';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);