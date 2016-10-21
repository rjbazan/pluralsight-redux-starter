import React from 'react';
import {connect} from 'react-redux';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import DateRange from '../filingAudits/DateRange';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
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
            selectionHandler={this.handleSelectChange}
            dateFormat={this.dateFormat}
            onFromDateChanged={this.onFromDateChanged}
            onToDateChanged={this.onToDateChanged}
            getKey={this.getKey}
            eFileCheckHandler={this.eFileCheckHandler}
            vatGroupCheckHandler={this.vatGroupCheckHandler}/>
        );
    }

    getKey(rowKey) {
        this.rowNumber = rowKey;
    }

    render() {
        return (
            <div className="col-md-11">
                <Table selectable={false}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Return Name</TableHeaderColumn>
                            <TableHeaderColumn>Filing Frequency</TableHeaderColumn>
                            <TableHeaderColumn>E-filing</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.props.loading ? 
                            <TableRow><TableRowColumn><div style={{position: 'absolute', left: '40%', bottom:'30%'}}>
                                <RefreshIndicator size={40} left={70} top={0} loadingColor="rgb(0, 188, 212)" status="loading"/>
                            </div></TableRowColumn></TableRow>
                            : this.props.returns.length ? 
                        this.props.returns.map(this.createReturnRow) : <TableRow><TableRowColumn><span>No records available.</span></TableRowColumn></TableRow> }
                    </TableBody>
                </Table>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        calendar: state.calendar
    };
}

export default connect(mapStateToProps)(CountryInfo);
