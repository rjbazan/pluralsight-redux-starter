import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import DateRange from '../filingAudits/DateRange';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

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
        }

        return (
            <TableRow onClick={this.props.getKey.bind(this, this.props.rowNumber) }>
                <TableRowColumn>
                    <div style={styles.tableCol}>{this.props.return.returnType}</div>
                    <div style={styles.tableCol}>
                        <a href="javascript:void(0)">Sample Link</a>
                    </div>
                </TableRowColumn>
                <TableRowColumn>
                    <span style={styles.label}>Frequency</span>
                    <SelectField value={this.props.return.frequency} onChange={this.props.onFrequencyChange} maxHeight={200} style={styles.selectField}>
                        <MenuItem value="Monthly" primaryText="Monthly" />
                        <MenuItem value="Quarterly" primaryText="Quarterly" />
                        <MenuItem value="Annually" primaryText="Anually" />
                    </SelectField>
                    <DateRange
                        label="Effective dates"
                        dateFormat={this.props.dateFormat}
                        defaultDateTo={this.props.return.endDate}
                        defaultDateFrom={this.props.return.startDate}
                        onFromDateChanged={this.props.onFromDateChanged}
                        onToDateChanged={this.props.onToDateChanged} />
                </TableRowColumn>
                <TableRowColumn>
                    <div style={styles.tableCol}>
                        <Checkbox label="E-file this return?" checked={this.props.return.eFile} onCheck={this.props.onEfileChecked}/>
                    </div>
                    <div style={styles.tableCol}>
                        <Checkbox label="Part of VAT group?" checked={this.props.return.partOfVatGroup} onCheck={this.props.onVatGroupChecked}/>
                        <RaisedButton children={<span style={styles.completeBtn}>Complete filing details</span>} />
                    </div>
                </TableRowColumn>
            </TableRow>
        );
    }


}


export default ReturnInfo;