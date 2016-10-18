import {combineReducers} from 'redux';
import courses from './courseReducer';
import calendar from './calendarReducer';
import filings from './filingAuditsReducer';

const rootReducer = combineReducers({
    courses,
    calendar,
    filings
});

export default rootReducer;