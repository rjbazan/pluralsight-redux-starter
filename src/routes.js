"use strict"
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import HomePage from './components/HomePage';
import CoursesPage from './components/courses/CoursesPage';

export default (
    <Route path="/" >
        <IndexRoute component={HomePage}/>
        <Route component={CoursesPage} path="forms"/>
    </Route>
);