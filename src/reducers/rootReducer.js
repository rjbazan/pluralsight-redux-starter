import {combineReducers} from 'redux';
import courses from './courseReducer';
import calendar from './calendarReducer';
import filings from './filingAuditsReducer';
import modal from './modalReducer';
import ajaxCalls from './ajaxStatusReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    courses,
    calendar,
    filings,
    modal,
    ajaxCalls,
    form: formReducer
});

export default rootReducer;