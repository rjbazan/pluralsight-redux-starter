export default function calendarReducer(state = initialState, action) {

    switch (action.type) {
    case 'LOAD_COMPANIES_SUCCESS':
        return Object.assign({}, state, { companies: action.companies });

    case 'LOAD_RETURNS':
        return  Object.assign({}, state, { isLoading: true, selectedCountry: action.index, countryName: action.country});  

    case 'LOAD_RETURNS_SUCCESS':
        return Object.assign({}, state, { returns: action.returns, isLoading: false });

    case 'SELECT_COMPANY':
        return Object.assign({}, state, { selectedCompany: action.company, returns: [], selectedCountry: null});

    case 'SELECT_COUNTRY':

        return Object.assign({}, state, {
            returns: state.filteredReturns.filter((item) => item.country == action.country)
        });

    case 'SELECT_FREQUENCY':

        return Object.assign({}, state, {
            returns: state.returns.map((item, index) => {
                if (action.rowNumber == index) {
                    return Object.assign({}, item, { frequency: action.frequency });
                }
                return item;
            })
        });

    case 'CHANGE_FROM_DATE':
        return Object.assign({}, state, {
            returns: state.returns.map((item, index) => {
                if (action.rowNumber == index) {
                    return Object.assign({}, item, { dateFrom: action.date });
                }
                return item;
            })
        });

    case 'CHANGE_TO_DATE':
        return Object.assign({}, state, {
            returns: state.returns.map((item, index) => {
                if (action.rowNumber == index) {
                    return Object.assign({}, item, { dateTo: action.date });
                }
                return item;
            })
        });     

    case 'CHECK_EFILE':

        return Object.assign({}, state, {
            returns: state.returns.map((item, index) => {
                if (action.rowNumber == index) {
                    return Object.assign({}, item, { eFile: action.value });
                }
                return item;
            })
        });

    case 'CHECK_VAT_GROUP':

        return Object.assign({}, state, {
            returns: state.returns.map((item, index) => {
                if (action.rowNumber == index) {
                    return Object.assign({}, item, { partOfVatGroup: action.value });
                }
                return item;
            })
        });

    case 'OPEN_MODAL':
        return Object.assign({}, state, { isModalOpen: action.flag });

    case 'ADD_RETURN':
        return Object.assign({}, state, {
            isModalOpen: false, returns: [...state.returns, Object.assign({}, action.form)]
        });

    case 'REMOVE_RETURN':
        return Object.assign({}, state, {
            returns: [...state.returns.slice(0, state.returns.length - 1), ...state.returns.slice(state.returns.length)]
        });              

    default:
        return state;
    }
}

const initialState = {
    companies:  [],
    selectedCompany: {name: null, countries: [], info: ''},
    selectedCountry: null,
    returns: [],
    isLoading: false,
    isModalOpen: false
};