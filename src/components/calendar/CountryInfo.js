import React from 'react';
import {connect} from 'react-redux';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import DateRange from '../filingAudits/DateRange';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import ReturnInfo from './CountryInfoRow';
import * as calendarActions from '../../actions/calendarActions';

const tableCol = {
    width: '200px',
    display: 'inline-block'
}

export class CountryInfo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.createReturnRow = this.createReturnRow.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    onFromDateChanged() {
        console.log('test')
    }

    onToDateChanged() {

    }

    dateFormat(date) {
        return date.toLocaleDateString("en-US");
    }

    handleSelectChange(event, index, value) {
        this.props.dispatch(calendarActions.selectFrequency(value, index));
    }

    createReturnRow(item, index) {
        return <ReturnInfo key={index} return={item} selectionHandler={this.handleSelectChange} dateFormat={this.dateFormat} onFromDateChanged={this.onFromDateChanged} onToDateChanged={this.onToDateChanged} />
    }

    render() {
        return (
            <Table selectable={false}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Return Name</TableHeaderColumn>
                        <TableHeaderColumn>Filing Frequency</TableHeaderColumn>
                        <TableHeaderColumn>E-filing</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {this.props.returns.map(this.createReturnRow)}                    
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

export default connect(mapStateToProps)(CountryInfo);
