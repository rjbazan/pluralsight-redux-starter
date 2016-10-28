import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import EditIcon from 'material-ui/svg-icons/action/settings';
import MenuItem from 'material-ui/MenuItem';

import {
  DatePicker,
  SelectField,
  Checkbox
} from 'redux-form-material-ui';


/**
 * This modal contains a form to add a new return for a previously selected country.
 */
class EditReturnModal extends React.Component {

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
      <FloatingActionButton mini onTouchTap={this.props.onOpen} >
        <EditIcon />
      </FloatingActionButton>
        <Dialog
          title="Edit Return"
          actions={actions}
          modal
          open={this.props.open}
          onRequestClose={this.props.onClose}
          >
          <p>Edit return here</p>
          <form>
            <Field name="returnType" component={SelectField} floatingLabelText="VAT Return Type">
              <MenuItem value={null} primaryText=" " />
              <MenuItem value={'Annual VAT Return'} primaryText="Annual VAT Return" />
              <MenuItem value={"Monthly VAT Return"} primaryText="Monthly VAT Return" />
              <MenuItem value={"ESL Return"} primaryText="ESL Return" />
              <MenuItem value={"Intrastat Arrival"} primaryText="Intrastat Arrival" />
            </Field>
            <br />
            <Field name="startDate" component={DatePicker} floatingLabelText="Start Date" style={styles.inline} />

            <Field name="endDate" component={DatePicker} floatingLabelText="End Date" />

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


EditReturnModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    calendar: state.calendar,
    modal: state.modal
  };
}
// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
EditReturnModal = reduxForm({
  form: 'EditReturn'  // a unique identifier for this form
})(EditReturnModal);

// You have to connect() to any reducers that you wish to connect to yourself
EditReturnModal = connect(
  state => {
    return { initialValues: state.calendar.returns[0] } // pull initial values from account reducer
  }            // bind account loading action creator
)(EditReturnModal);

export default EditReturnModal;
