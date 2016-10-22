export default function modalReducer(state = initialState, action) {

    switch (action.type) {
        case 'SELECT_FREQUENCY':
            return Object.assign({}, state, { frequency: action.frequency });

        case 'SELECT_RETURN_TYPE':
            return Object.assign({}, state, { returnType: action.returnType });    

        case 'SELECT_START_DATE':
            return Object.assign({}, state, { startDate: action.date });

        case 'SELECT_END_DATE':
            return Object.assign({}, state, { endDate: action.date });     

        default:
            return state
    }
}

const initialState = {
    frequency:  'Monthly',
    startDate: null,
    endDate: null,
    returnType: 'Monthly'
}