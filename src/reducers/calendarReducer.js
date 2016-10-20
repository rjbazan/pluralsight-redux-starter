export default function calendarReducer(state = initialState, action) {

    switch (action.type) {
        case 'SELECT_COMPANY':
            return Object.assign({}, state, {selectedCompany: action.company});

        case 'SELECT_FREQUENCY':
            return Object.assign({}, state, {});

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
    selectedCompany: {name: ' ', countries: ['USA', 'Argentina', 'Portugal'], info: 'testing company'},
    returns: [{
        type: 'Annual VAT Return',
        link: 'http://google.com.ar',
        frequency: 'Annually',
        dateFrom: '02/02/2010',
        dateTo: '02/02/2015',
        eFile: true,
        partOfVatGroup: true
    },
    {
        type: 'Annual VAT Return',
        link: 'http://google.com.ar',
        frequency: 'Annually',
        dateFrom: '02/02/2010',
        dateTo: '02/02/2015',
        eFile: false,
        partOfVatGroup: false
    }]
}