import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as filingAuditsActions from '../../actions/filingAuditsActions';
import FilingTable from './FilingTable';
import DateRange from './DateRange';

const today = new Date();

class FilingAudits extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onFromDateChanged = this.onFromDateChanged.bind(this);
        this.onToDateChanged = this.onToDateChanged.bind(this);
    }

    onFromDateChanged(event, date) {
        this.props.filings.DateRange.FromDate = date;
        this.props.dispatch(filingAuditsActions.filter(this.props.filings.DateRange));
    }

    onToDateChanged(event, date) {
        this.props.filings.DateRange.ToDate = date;
        this.props.dispatch(filingAuditsActions.filter(this.props.filings.DateRange));
    }

    dateFormat(date) {
        return date.toLocaleDateString("en-US");
    }

    render() {
        return (
            <div>
                <DateRange
                    dateFormat={this.dateFormat}
                    defaultDate={today}
                    onFromDateChanged={this.onFromDateChanged}
                    onToDateChanged={this.onToDateChanged}/>
                <FilingTable audits={this.props.filings.FilteredFilingAudits}/>

            </div>
        );
    }
}

FilingAudits.propTypes = {
    filings: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        filings: state.filings
    };
}

export default connect(mapStateToProps)(FilingAudits);
