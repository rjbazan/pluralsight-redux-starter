export const selectCompany = (company) => 
{
    return {type: 'SELECT_COMPANY', company};
}

export const selectCountry = (country) => {
    return {type: 'SELECT_COUNTRY', country}
}

export const selectFrequency = (frequency, index) => {
    console.log(index)
    return {type: 'SELECT_FREQUENCY', frequency, index}
}
