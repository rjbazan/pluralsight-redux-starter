import React, {PropTypes} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const FilingTableRow = (audit, index) => {
    return (
        <TableRow key={index}>
            <TableRowColumn>{audit.CountryCode}</TableRowColumn>
            <TableRowColumn>{audit.CompanyName}</TableRowColumn>
            <TableRowColumn>{audit.ReportType}</TableRowColumn>
            <TableRowColumn>{audit.ReportingPeriod}</TableRowColumn>
            <TableRowColumn>{audit.TransmissionDetails.FormattedTransmissionDate}</TableRowColumn>
            <TableRowColumn>{audit.TrackingNumber}</TableRowColumn>
            <TableRowColumn>{audit.UserFullName}</TableRowColumn>
            <TableRowColumn>{audit.Errors}</TableRowColumn>
        </TableRow>
    );
};

class FilingTable extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Country Code</TableHeaderColumn>
                        <TableHeaderColumn>Company</TableHeaderColumn>
                        <TableHeaderColumn>Report Category</TableHeaderColumn>
                        <TableHeaderColumn>Reporting Period</TableHeaderColumn>
                        <TableHeaderColumn>Transmission Timestamp</TableHeaderColumn>
                        <TableHeaderColumn>Tracking #</TableHeaderColumn>
                        <TableHeaderColumn>Filed By</TableHeaderColumn>
                        <TableHeaderColumn>Errors</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {this.props.audits.map(FilingTableRow)}
                </TableBody>
            </Table>
        );
    }
}

FilingTable.propTypes = {
    audits: PropTypes.array.isRequired
};

export default FilingTable;
