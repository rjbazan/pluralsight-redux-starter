import 'babel-polyfill';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import HomePage from './components/HomePage.js';
import routes from './routes';
import {loadCompanies} from './actions/calendarActions';
import configureStore from './store/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();
store.dispatch(loadCompanies());
render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={browserHistory} routes={routes}/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);

store.subscribe()