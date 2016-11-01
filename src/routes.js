"use strict";
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './components/HomePage';
import CoursesPage from './components/courses/CoursesPage';
import CalendarPage from './components/calendar/CalendarPage';
import FilingAudits from './components/filingAudits/FilingAudits';
import FormPage from './components/forms/FormPage';

export default (
    <Route path="/" component={HomePage}>
        <IndexRoute component={CoursesPage} />
        <Route component={FilingAudits} path="filings" />
        <Route component={CalendarPage} path="calendar" />
        <Route component={FormPage} path="forms" />
    </Route>
);