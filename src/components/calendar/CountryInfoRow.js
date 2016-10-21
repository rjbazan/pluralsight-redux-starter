import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import DateRange from '../filingAudits/DateRange';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

const tableCol = {
    width: '200px',
    display: 'inline-block',
    verticalAlign: 'top'
}

export class ReturnInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <TableRow onClick={this.props.getKey.bind(this, this.props.rowNumber) }>
                <TableRowColumn>
                    <div style={tableCol}>{this.props.return.type}</div>
                    <div style={tableCol}>
                        <a href="javascript:void(0)">Sample Link</a>
                    </div>
                </TableRowColumn>
                <TableRowColumn>Frequency (required)
                    <SelectField value={this.props.return.frequency} onChange={this.props.selectionHandler} maxHeight={200} style={{ marginLeft: '20px' }}>
                        <MenuItem value="Monthly" primaryText="Monthly" />
                        <MenuItem value="Quarterly" primaryText="Quarterly" />
                        <MenuItem value="Annually" primaryText="Anually" />
                    </SelectField>
                    <DateRange
                        label="Effective dates"
                        dateFormat={this.props.dateFormat}
                        defaultDateTo={this.props.return.dateTo}
                        defaultDateFrom={this.props.return.dateFrom}
                        onFromDateChanged={this.props.onFromDateChanged}
                        onToDateChanged={this.props.onToDateChanged} />
                </TableRowColumn>
                <TableRowColumn>
                    <div style={tableCol}>
                        <Checkbox label="E-file this return?" checked={this.props.return.eFile} onCheck={this.props.eFileCheckHandler}/>
                    </div>
                    <div style={tableCol}>
                        <Checkbox label="Part of VAT group?" checked={this.props.return.partOfVatGroup} onCheck={this.props.vatGroupCheckHandler}/>
                        <RaisedButton children={<span style={{ padding: '5px 10px' }}>Complete filing details</span>} />
                    </div>
                </TableRowColumn>
            </TableRow>
        );
    }


}


export default ReturnInfo;