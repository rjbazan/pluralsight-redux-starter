import CalendarApi from '../api/mockCalendarApi';


export const selectFrequency = (frequency) => {
    return {type: 'SELECT_FREQUENCY', frequency};
}

export const selectReturnType = (returnType) => {
    return {type: 'SELECT_RETURN_TYPE', returnType};
}

export const selectStartDate = (date) => {
    return {type: 'SELECT_START_DATE', date};
}

export const selectEndDate = (date) => {
    return {type: 'SELECT_END_DATE', date};
}

export const addReturn = (form) => {
    return {type: 'ADD_RETURN', form};
}

export const disableEndDate = (value) => {
    return {type: 'DISABLE_END_DATE', value};
}
