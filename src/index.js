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
import './main.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {lightBlue500, lightBlue300, grey800, orange400} from 'material-ui/styles/colors';

const myTheme = getMuiTheme({
    palette: {
        primary1Color: lightBlue300,
        primary2Color: grey800,
        accent1Color: orange400,
        pickerHeaderColor: lightBlue300
    }
});
const store = configureStore();
store.dispatch(loadCompanies());
render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={myTheme}>
            <Router history={browserHistory} routes={routes}/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);

store.subscribe();