import {combineReducers} from 'redux';
import courses from './courseReducer';
import calendar from './calendarReducer';
import filings from './filingAuditsReducer';
import modal from './modalReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    courses,
    calendar,
    filings,
    modal,
    form: formReducer
});

export default rootReducer;