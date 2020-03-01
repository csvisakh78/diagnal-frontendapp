import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/tailwind.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StoreState } from './shared/types/index';
import { rootReducer } from './shared/reducers/index';
const history = createHistory();

const store = createStore<StoreState>(rootReducer, {
    searchDetails: []
}); 
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store as any}>
    <Router history={history}>
        <App />
    </Router>
    </Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
