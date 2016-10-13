export default function calendarReducer(state = {selectedCountry: null}, action) {
    switch (action.type) {
        case 'SELECT_COUNTRY':
            return Object.assign({}, state, {selectedCountry: action.country});

        default:
            return state
    }
}