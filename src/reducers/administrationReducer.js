const administrationReducer = (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case 'LOAD_ADMINISTRATION_SUCCESS':
      return action.administration;

    default:
      return state;
  }
};

/**
 * Simulates data loaded into this reducer from somewhere
 */

export default administrationReducer;