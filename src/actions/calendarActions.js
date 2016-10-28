import CalendarApi from '../api/mockCalendarApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export const selectCompany = (company) => {
    return {type: 'SELECT_COMPANY', company};
};

export const selectCountry = (country) => {
    return {type: 'SELECT_COUNTRY', country};
};

export const openModal = (flag) => {
    return {type: 'OPEN_MODAL', flag};
};

export const closeModal = (flag) => {
    return {type: 'CLOSE_MODAL', flag};
};

export const addReturn = (returnObject) => {
    return {type: 'ADD_RETURN', returnObject};
};

export const removeReturn = () => {
    return {type: 'REMOVE_RETURN'};
};

export const selectFrequency = (frequency, index, rowNumber) => {
    return {type: 'SELECT_FREQUENCY', frequency, index, rowNumber};
};

export const checkEfile = (value, rowNumber) => {
    return {type: 'CHECK_EFILE', value, rowNumber};
};

export const checkVatGroup = (value, rowNumber) => {
    return {type: 'CHECK_VAT_GROUP', value, rowNumber};
};

export const changeFromDate = (date, rowNumber) => {
    return {type: 'CHANGE_FROM_DATE', date, rowNumber};
};

export const changeToDate = (date, rowNumber) => {
    return {type: 'CHANGE_TO_DATE', date, rowNumber};
};

export const loadCompaniesSuccess = (companies) => {
    return {type: 'LOAD_COMPANIES_SUCCESS', companies};
};

export const loadReturnsSuccess = (returns) => {
    return {type: 'LOAD_RETURNS_SUCCESS', returns};
};

export const loadReturns = (index, country) => {
    return {type: 'LOAD_RETURNS', index, country};
};

export const updatePreferences = (preferences) => ({type: 'UPDATE_PREFERENCES', preferences});

export const loadSettingsSuccess = (settings) => ({type: 'LOAD_SETTINGS_SUCCESS', settings});

export const savePreferenceSuccess = (resp) => ({type: 'SAVE_PREFERENCE_SUCCESS', resp});

export const deletePreferenceSuccess = (resp) => ({type: 'DELETE_PREFERENCE_SUCCESS', resp});

export const loadReportsSuccess = (reports) => ({type: 'LOAD_REPORTS_SUCCESS', reports});

export const loadFrequenciesSuccess = (frequencies) => ({type: 'LOAD_FREQUENCIES_SUCCESS', frequencies});

export const loadCompanies = (companies) => {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return CalendarApi.getAllCompanies().then(companies => {
            dispatch(loadCompaniesSuccess(companies));
        }).catch(error => {
            dispatch(ajaxCallError());
            throw(error);
        });
    };
};

export const getSettings = (countryId, countryCode) => {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return CalendarApi.GetSettings(countryId, countryCode).then(settings => {
            dispatch(loadSettingsSuccess(settings));
        }).catch(error => {
            dispatch(ajaxCallError());
            throw (error);
        });
    };
};

export const savePreference = (preference) => {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return CalendarApi.SavePreference(preference).then(resp => {
            dispatch(savePreferenceSuccess(resp));
        }).catch(error => {
            dispatch(ajaxCallError());
            throw (error);
        });
    };
};

export const deletePreference = (preference) => {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return CalendarApi.DeletePreference(preference).then(resp => {
            dispatch(deletePreferenceSuccess(resp));
        }).catch(error => {
            dispatch(ajaxCallError());
            throw (error);
        });
    };
};

export const getAvailableReports = (countryCode) => {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return CalendarApi.GetAvailableReports(countryCode).then(reports => {
            dispatch(loadReportsSuccess(reports));
        }).catch(error => {
            dispatch(ajaxCallError());
            throw (error);
        });
    };
};

export const getAvailableFrequencies = (reportType, countryCode) => {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return CalendarApi.GetAvailableFrequencies(reportType, countryCode).then(frequencies => {
            dispatch(loadFrequenciesSuccess(frequencies));
        }).catch(error => {
            dispatch(ajaxCallError());
            throw (error);
        });
    };
};


export const loadCountryReturns = (country) => {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return CalendarApi.getCountryReturns(country).then(returns => {
            dispatch(loadReturnsSuccess(returns));
        }).catch(error => {
            dispatch(ajaxCallError());
            throw(error);
        });
    };
};