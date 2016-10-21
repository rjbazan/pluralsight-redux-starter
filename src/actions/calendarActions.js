import CalendarApi from '../api/mockCalendarApi';


export const selectCompany = (company) => 
{
    return {type: 'SELECT_COMPANY', company};
}

export const selectCountry = (country) => {
    return {type: 'SELECT_COUNTRY', country}
}

export const selectFrequency = (frequency, index, rowNumber) => {
    return {type: 'SELECT_FREQUENCY', frequency, index, rowNumber}
}

export const checkEfile = (value, rowNumber) => {
    return {type: 'CHECK_EFILE', value, rowNumber}
}

export const checkVatGroup = (value, rowNumber) => {
    return {type: 'CHECK_VAT_GROUP', value, rowNumber}
}

export const changeFromDate = (date, rowNumber) => {
    return {type: 'CHANGE_FROM_DATE', date, rowNumber}
}

export const changeToDate = (date, rowNumber) => {
    return {type: 'CHANGE_TO_DATE', date, rowNumber}
}

export const loadCompaniesSuccess = (companies) => {
    return {type: 'LOAD_COMPANIES_SUCCESS', companies}
}

export const loadReturnsSuccess = (returns) => {
    return {type: 'LOAD_RETURNS_SUCCESS', returns}
}

export const loadReturns = () => {
    return {type: 'LOAD_RETURNS'}
}

export const loadCompanies = (companies) => {
    return function(dispatch) {
        return CalendarApi.getAllCompanies().then(companies => {
            dispatch(loadCompaniesSuccess(companies))
        }).catch(error => {
            throw(error);
        });
    }
}

export const loadCountryReturns = (country) => {
    return function(dispatch) {
        return CalendarApi.getCountryReturns(country).then(returns => {
            dispatch(loadReturnsSuccess(returns))
        }).catch(error => {
            throw(error);
        });
    }
}