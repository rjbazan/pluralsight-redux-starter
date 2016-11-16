import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import {
  Checkbox,
  TextField
} from 'redux-form-material-ui';


/**
 * This modal contains a form to add a new return for a previously selected country.
 */
let CardForm = props => (
  <form>

    <Field name="Name" floatingLabelText="Name" component={ TextField } />

    <Field name="IsDone" label="Done?" component={ Checkbox } />

    <Field name="Deadline" floatingLabelText="Name" component={ TextField } />

  </form>
);

CardForm.propTypes = {

};

const validate = (values) => {
  const errors = {};
  const requiredFields = ['frequency', 'startDate', 'returnType', 'hasEndDate'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      if (field === 'hasEndDate' && !values.endDate) {
        errors.endDate = 'Required';
      }
      errors[field] = 'Required';
    }
  });

  return errors;
};
/*eslint-disable */
CardForm = reduxForm({
  validate // a unique identifier for this form
})(CardForm);


// Decorate with connect to read form values
const selector = formValueSelector('Card'); // <-- same as form name
export default CardForm = connect(
  (state) => {
    const hasEndDateValue = selector(state, 'hasEndDate');
    const form = 'Card';

    return {
      hasEndDateValue,
      form
    };
  }
)(CardForm);
/*eslint-enable */
