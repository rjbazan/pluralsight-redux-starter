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
