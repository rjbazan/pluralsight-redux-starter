import {combineReducers} from 'redux';
import courses from './courseReducer';
import calendar from './calendarReducer';

const rootReducer = combineReducers({
    courses,
    calendar
});

export default rootReducer;