export default function calendarReducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case 'SELECT_COMPANY':
            return Object.assign({}, state, {selectedCompany: action.company});

        default:
            return state
    }
}

const initialState = {
    companies:  [
        {name: 'Microsoft', countries: ['USA', 'Belgium', 'Spain', 'New Zeland', 'Australia'], info: 'Microsoft company'},
        {name: 'Google', countries: ['USA', 'Argentina', 'Portugal'], info: 'testing company'},
        {name: 'Yahoo', countries: ['Canada', 'Germany', 'Brazil'], info: 'some company'},
        {name: 'HomeDepot', countries: ['USA', 'Belgium', 'Spain'], info: 'info company'}
    ],
    selectedCompany: {name: ' ', countries: ['USA', 'Argentina', 'Portugal'], info: 'testing company'}
}