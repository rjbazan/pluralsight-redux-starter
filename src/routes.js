"use strict"
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import HomePage from './components/HomePage';
import CalendarPage from './components/calendar/CalendarPage';

export default (
    <Route path="/" >
        <IndexRoute component={HomePage}/>
        <Route component={CalendarPage} path="calendar"/>
    </Route>
);