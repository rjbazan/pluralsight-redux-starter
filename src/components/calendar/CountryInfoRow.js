import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import DateRange from '../filingAudits/DateRange';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import EditReturnModal from './EditReturnModal';

class ReturnInfo extends React.Component {

  render() {
    const styles = {
      tableCol: {
        width: '200px',
        display: 'inline-block',
        verticalAlign: 'top'
      },
      selectField: {
        marginLeft: '20px'
      },
      completeBtn: {
        padding: '5px 10px'
      },
      label: {
        paddingRight: '25px'
      }
    };

    return (
      <TableRow onClick={this.props.getKey.bind(this, this.props.rowNumber)}>
        <TableRowColumn>
          <div>{this.props.return.returnType}</div>
        </TableRowColumn>
        <TableRowColumn>
          <a href="javascript:void(0)">Sample Link</a>
        </TableRowColumn>
        <TableRowColumn>
          <div>{this.props.return.frequency}</div>
        </TableRowColumn>
        <TableRowColumn>
          <div>{this.props.return.startDate} - {this.props.return.endDate}</div>
        </TableRowColumn>
        <TableRowColumn>
          <div>{this.props.return.filingMethod}</div>
        </TableRowColumn>
        <TableRowColumn>
          empty
        </TableRowColumn>
        <TableRowColumn>
          <EditReturnModal
            onOpen={this.props.onOpen}
            onClose={this.props.onClose}
            open={this.props.open}
            defaultFrequency={this.props.return.frequency}
            defaultStartDate={this.props.return.startDate}
            defaultEndDate={this.props.return.endDate}
            defaultReturnType={this.props.return.returnType} />
        </TableRowColumn>      
      </TableRow>
    );
  }


}

ReturnInfo.propTypes = {
  dateFormat: PropTypes.func.isRequired,
  return: PropTypes.object.isRequired,
  onFromDateChanged: PropTypes.func.isRequired,
  onToDateChanged: PropTypes.func.isRequired,
  onVatGroupChecked: PropTypes.func.isRequired,
  onEfileChecked: PropTypes.func.isRequired,
  onFrequencyChange: PropTypes.func.isRequired,
  getKey: PropTypes.func.isRequired,
  rowNumber: PropTypes.number
};


export default ReturnInfo;