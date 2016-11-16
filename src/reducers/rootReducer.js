import {combineReducers} from 'redux';
import courses from './courseReducer';
import calendar from './calendarReducer';
import filings from './filingAuditsReducer';
import ajaxCalls from './ajaxStatusReducer';
import administration from './administrationReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    courses,
    calendar,
    filings,
    ajaxCalls,
    administration,
    form: formReducer
});

export default rootReducer;