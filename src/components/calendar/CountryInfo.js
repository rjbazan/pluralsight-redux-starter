import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import ReturnInfo from './CountryInfoRow';
import * as calendarActions from '../../actions/calendarActions';

export class CountryInfo extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.createReturnRow = this.createReturnRow.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.getKey = this.getKey.bind(this);
    this.eFileCheckHandler = this.eFileCheckHandler.bind(this);
    this.vatGroupCheckHandler = this.vatGroupCheckHandler.bind(this);
    this.onFromDateChanged = this.onFromDateChanged.bind(this);
    this.onToDateChanged = this.onToDateChanged.bind(this);
  }

  onFromDateChanged(ev, date) {
    this.props.dispatch(calendarActions.changeFromDate(date, this.rowNumber));
  }

  onToDateChanged(ev, date) {
    this.props.dispatch(calendarActions.changeToDate(date, this.rowNumber));
  }

  dateFormat(date) {
    return date.toLocaleDateString("en-US");
  }

  handleSelectChange(event, index, value) {
    this.props.dispatch(calendarActions.selectFrequency(value, index, this.rowNumber));
  }

  vatGroupCheckHandler(event, isInputChecked) {
    this.props.dispatch(calendarActions.checkVatGroup(isInputChecked, this.rowNumber));
  }

  eFileCheckHandler(event, isInputChecked) {
    this.props.dispatch(calendarActions.checkEfile(isInputChecked, this.rowNumber));
  }

  createReturnRow(item, index) {
    return (<ReturnInfo key={index}
      return={item}
      onFrequencyChange={this.handleSelectChange}
      dateFormat={this.dateFormat}
      onFromDateChanged={this.onFromDateChanged}
      onToDateChanged={this.onToDateChanged}
      getKey={this.getKey}
      onEfileChecked={this.eFileCheckHandler}
      onVatGroupChecked={this.vatGroupCheckHandler} />
    );
  }

  getKey(rowKey) {
    this.rowNumber = rowKey;
  }

  render() {
    const styles = {
      spinner: {
        position: 'absolute',
        left: '40%',
        top: '50%'
      }
    };

    return (

          <Table selectable={true}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Return Name</TableHeaderColumn>
                <TableHeaderColumn>Filing Frequency</TableHeaderColumn>
                <TableHeaderColumn>E-filing</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {this.props.loading ?
                <TableRow>
                  <TableRowColumn>
                    <div style={styles.spinner}>
                      <RefreshIndicator size={40} left={70} top={0} loadingColor="rgb(0, 188, 212)" status="loading" />
                    </div>
                  </TableRowColumn>
                </TableRow>
                : this.props.returns.length ?
                  this.props.returns.map(this.createReturnRow) : 
                  <TableRow>
                    <TableRowColumn>
                      <span>No records available.</span>
                    </TableRowColumn>
                  </TableRow>}
            </TableBody>
          </Table>

    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    calendar: state.calendar
  };
}

CountryInfo.propTypes = {
  selectedCompany: PropTypes.string,
  returns: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(CountryInfo);
