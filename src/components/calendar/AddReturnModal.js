import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * Modal Testing
 */
export default class AddReturnModal extends React.Component {

  render() {
    const actions = [
        <FlatButton
        label="Cancel"
        primary={false}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.handleSubmit}
      />
    ];

    return (
      <span>
        <RaisedButton label={this.props.btnLabel} onTouchTap={this.props.handleOpen} />
        <Dialog
          title="Add Return"
          actions={actions}
          modal={true}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
        >
          <p>You are about to add a return to the Filing Calendar for . 
          Please select the report from the below list and specify the period for which you want to sign up for the particular return.</p>
          
          <SelectField onChange={this.props.selectionHandler} maxHeight={200}>
                <MenuItem value="Monthly" primaryText="Monthly" />
                <MenuItem value="Quarterly" primaryText="Quarterly" />
                <MenuItem value="Annually" primaryText="Anually" />
          </SelectField>
          <DatePicker hintText="Date Picker" />
          <DatePicker hintText="Date Picker" />
          <SelectField onChange={this.props.selectionHandler} maxHeight={200}>
                <MenuItem value="Monthly" primaryText="Monthly" />
                <MenuItem value="Quarterly" primaryText="Quarterly" />
                <MenuItem value="Annually" primaryText="Anually" />
          </SelectField>
        </Dialog>
      </span>
    );
  }
}