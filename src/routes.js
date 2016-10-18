"use strict"
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import HomePage from './components/HomePage';
import CalendarPage from './components/calendar/CalendarPage';
import FilingAudits from './components/filingAudits/FilingAudits';

export default (
    <Route path="/" >
        <IndexRoute component={HomePage}/>
        <Route component={FilingAudits} path="calendar"/>
    </Route>
);