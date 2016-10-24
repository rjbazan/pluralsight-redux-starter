import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import MenuItem from 'material-ui/MenuItem';

import {
  DatePicker,
  SelectField,
  Checkbox
} from 'redux-form-material-ui';

const validate = values => {
  const errors = {};
  const requiredFields = [ 'frequency', 'startDate', 'returnType'];
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required';
    }
  });

  return errors;
};


/**
 * This modal contains a form to add a new return for a previously selected country.
 */
class AddReturnModal extends React.Component {

  render() {
    const styles = {
      inline: { display: 'inline-block', width: '50%', verticalAlign: 'bottom' },
      block: { display: 'block' },
      label: { fontSize: '14px' },
      addReturnBtn: { margin: '20px' }
    };
    const actions = [
      <FlatButton
        label="Cancel"
        key="0"
        primary={false}
        onTouchTap={this.props.onClose}
      />,
      <FlatButton
        label="OK"
        key="1"
        primary
        keyboardFocused
        onTouchTap={this.props.handleSubmit}
      />
    ];

    return (
      <div>
        <RaisedButton label="Add Return" onTouchTap={this.props.onOpen} />
        <RaisedButton label="Remove Return" onTouchTap={this.props.onRemove} style={styles.addReturnBtn}/>
        <Dialog
          title="Add Return"
          actions={actions}
          modal
          open={this.props.open}
          onRequestClose={this.props.onClose}
        >
          <p>You are about to add a return to the Filing Calendar for {this.props.country}. 
          Please select the report from the below list and specify the period for which you want to sign up for the particular return.</p>
          <form>
            <Field name="returnType" component={SelectField} floatingLabelText="VAT Return Type">
              <MenuItem value={null} primaryText=" " />
              <MenuItem value={'Annual VAT Return'} primaryText="Annual VAT Return" />
              <MenuItem value={"Monthly VAT Return"} primaryText="Monthly VAT Return" />
              <MenuItem value={"ESL Return"} primaryText="ESL Return" />
              <MenuItem value={"Intrastat Arrival"} primaryText="Intrastat Arrival" />
            </Field>
            <br/>
            <Field name="startDate" component={DatePicker} floatingLabelText="Start Date" style={styles.inline}/>

            <Field name="checkbox" label="Only start date?" component={Checkbox} style={styles.inline} labelStyle={styles.label}/>
            
            <Field name="endDate" component={DatePicker} floatingLabelText="End Date" disabled={this.props.endDateDisabled}/>

            <Field name="frequency" component={SelectField} floatingLabelText="Frequency">
              <MenuItem value={null} primaryText=" " />
              <MenuItem value={'Monthly'} primaryText="Monthly" />
              <MenuItem value={'Bi-Monthly'} primaryText="Bi-Monthly" />
              <MenuItem value={'Quarterly'} primaryText="Quarterly" />
              <MenuItem value={'Semi-Annually'} primaryText="Semi-Annually" />
              <MenuItem value={'Annually'} primaryText="Anually" />
            </Field>

          </form>
        </Dialog>
      </div>
    );
  }
}

AddReturnModal = reduxForm({
  form: 'AddReturn', // a unique name for this form
  validate
})(AddReturnModal);

export default AddReturnModal;
