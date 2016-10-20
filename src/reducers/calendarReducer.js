export default function calendarReducer(state = initialState, action) {

    switch (action.type) {
        case 'SELECT_COMPANY':
            return Object.assign({}, state, { selectedCompany: action.company });

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
    companies:  [
        {name: 'Microsoft', countries: ['USA', 'Belgium', 'Spain', 'New Zeland', 'Australia'], info: 'Microsoft company'},
        {name: 'Google', countries: ['USA', 'Argentina', 'Portugal'], info: 'testing company'},
        {name: 'Yahoo', countries: ['Canada', 'Germany', 'Brazil'], info: 'some company'},
        {name: 'HomeDepot', countries: ['USA', 'Belgium', 'Spain'], info: 'info company'},
        {name: 'Disco', countries: ['USA', 'Argentina', 'Portugal', 'Belgium'], info: 'testing company'}
    ],
    selectedCompany: {name: 'Disco', countries: ['USA', 'Argentina', 'Portugal', 'Belgium'], info: 'testing company'},
    filteredReturns: [{
        type: 'Annual VAT Return',
        link: 'http://google.com.ar',
        frequency: 'Annually',
        dateFrom: new Date('02/02/2010'),
        dateTo: new Date('02/02/2015'),
        eFile: true,
        partOfVatGroup: false,
        country: 'Belgium',
        company: 'HomeDepot'
    },
    {
        type: 'IntraStatal',
        link: 'http://google.com.ar',
        frequency: 'Annually',
        dateFrom: new Date('02/02/2010'),
        dateTo: new Date('02/02/2015'),
        eFile: true,
        partOfVatGroup: true,
        country: 'Portugal',
        company: 'Disco'
    },
    {
        type: 'Rodrigo',
        link: 'http://lagaceta.com.ar',
        frequency: 'Monthly',
        dateFrom: new Date('02/07/2010'),
        dateTo: new Date('02/07/2015'),
        eFile: false,
        partOfVatGroup: false,
        country: 'Portugal',
        company: 'Disco'
    }],
    returns: [{
        type: 'Annual VAT Return',
        link: 'http://google.com.ar',
        frequency: 'Annually',
        dateFrom: new Date('02/02/2010'),
        dateTo: new Date('02/02/2015'),
        eFile: true,
        country: 'Belgium',
        company: 'Disco',
        partOfVatGroup: false
    },
    {
        type: 'IntraStatal',
        link: 'http://google.com.ar',
        frequency: 'Annually',
        dateFrom: new Date('02/02/2010'),
        dateTo: new Date('02/02/2015'),
        eFile: true,
        partOfVatGroup: true,
        country: 'Portugal',
        company: 'Disco'
    },
    {
        type: 'Rodrigo',
        link: 'http://lagaceta.com.ar',
        frequency: 'Monthly',
        dateFrom: new Date('02/07/2010'),
        dateTo: new Date('02/07/2015'),
        eFile: false,
        partOfVatGroup: false,
        country: 'Portugal',
        company: 'Disco'
    }]
}