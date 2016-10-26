import {combineReducers} from 'redux';
import courses from './courseReducer';
import calendar from './calendarReducer';
import filings from './filingAuditsReducer';
import ajaxCalls from './ajaxStatusReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    courses,
    calendar,
    filings,
    ajaxCalls,
    form: formReducer
});

export default rootReducer;