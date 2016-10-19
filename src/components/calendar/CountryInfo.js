import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import DateRange from '../filingAudits/DateRange';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

const CalendarTableRow = (audit, index) => {
    return (
        <TableRow key={index}>
            <TableRowColumn>{audit.CountryCode}</TableRowColumn>
            <TableRowColumn>{audit.CompanyName}</TableRowColumn>
            <TableRowColumn>test</TableRowColumn>
            <TableRowColumn>{audit.ReportingPeriod}</TableRowColumn>
            <TableRowColumn>{audit.TransmissionDetails.FormattedTransmissionDate}</TableRowColumn>
            <TableRowColumn>{audit.TrackingNumber}</TableRowColumn>
            <TableRowColumn>{audit.UserFullName}</TableRowColumn>
            <TableRowColumn>{audit.Errors}</TableRowColumn>
        </TableRow>
    );
};

const tableCol = {
    width: '350px',
    display: 'inline-block'
}

export class CountryInfo extends React.Component {
    constructor(props, context) {
        super(props, context);

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
        this.setState({value});
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
                    <TableRow>
                        <TableRowColumn>
                         <div style={tableCol}>Annual VAT Return</div>
                         <div style={tableCol}>
                            <a href="javascript:void(0)">See sample</a>
                         </div>
                        </TableRowColumn>
                        <TableRowColumn>Frequency (required)
                        <SelectField onChange={this.handleSelectChange} maxHeight={200} style={{marginLeft: '20px'}}>
                            <MenuItem value="Monthly" primaryText="Monthly" />
                            <MenuItem value="Quarterly" primaryText="Quarterly" />
                            <MenuItem value="Anually" primaryText="Anually" />
                        </SelectField>             
                            <DateRange
                                label="Effective dates"
                                dateFormat={this.dateFormat}
                                onFromDateChanged={this.onFromDateChanged}
                                onToDateChanged={this.onToDateChanged}/>
                        </TableRowColumn>
                        <TableRowColumn>
                        <div style={tableCol}>
                            <Checkbox label="E-file this return?"/>
                        </div>
                         <div style={tableCol}>
                            <Checkbox label="Part of VAT group?"/>
                            <RaisedButton children={<span>Complete filing details</span>} style={{width: '150'}} />
                         </div>
                        </TableRowColumn>
                    </TableRow>
                    
                </TableBody>
            </Table>
        );
    }
}

export default CountryInfo;
