export default function calendarReducer(state = initialState, action) {

    switch (action.type) {
        case 'LOAD_COMPANIES_SUCCESS':
            return Object.assign({}, state, { companies: action.companies, selectedCompany: action.companies[0] });

        case 'LOAD_RETURNS':
            return  Object.assign({}, state, { isLoading: true });  

        case 'LOAD_RETURNS_SUCCESS':
            return Object.assign({}, state, { returns: action.returns, isLoading: false });

        case 'SELECT_COMPANY':
            return Object.assign({}, state, { selectedCompany: action.company, returns: []});

        case 'SELECT_COUNTRY':

            return Object.assign({}, state, {
                returns: state.filteredReturns.filter((item) => item.country == action.country)
            });

        case 'SELECT_FREQUENCY':

            return Object.assign({}, state, {
                returns: state.returns.map((item, index) => {
                    if (action.rowNumber == index) {
                        return Object.assign({}, item, { frequency: action.frequency })
                    }
                    return item
                })
            });

        case 'CHANGE_FROM_DATE':
            return Object.assign({}, state, {
                returns: state.returns.map((item, index) => {
                    if (action.rowNumber == index) {
                        return Object.assign({}, item, { dateFrom: action.date })
                    }
                    return item
                })
            });

        case 'CHANGE_TO_DATE':
            return Object.assign({}, state, {
                returns: state.returns.map((item, index) => {
                    if (action.rowNumber == index) {
                        return Object.assign({}, item, { dateTo: action.date })
                    }
                    return item
                })
            });     

        case 'CHECK_EFILE':

            return Object.assign({}, state, {
                returns: state.returns.map((item, index) => {
                    if (action.rowNumber == index) {
                        return Object.assign({}, item, { eFile: action.value })
                    }
                    return item
                })
            });

        case 'CHECK_VAT_GROUP':

            return Object.assign({}, state, {
                returns: state.returns.map((item, index) => {
                    if (action.rowNumber == index) {
                        return Object.assign({}, item, { partOfVatGroup: action.value })
                    }
                    return item
                })
            });      

        default:
            return state
    }
}

const initialState = {
    companies:  [],
    selectedCompany: {name: '', countries: [], info: 'testing company'},
    returns: [],
    isLoading: false
}