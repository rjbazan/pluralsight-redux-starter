export const selectCompany = (company) => 
{
    return {type: 'SELECT_COMPANY', company};
}

export const selectCountry = (country) => {
    return {type: 'SELECT_COUNTRY', country}
}