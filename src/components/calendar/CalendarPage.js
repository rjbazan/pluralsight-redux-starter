import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as calendarActions from '../../actions/calendarActions';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import ViewCountries from './ViewCountries';
import CountryInfo from './CountryInfo';

export class CalendarPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(event, index, selectedCompany) {
        this.props.dispatch(calendarActions.selectCompany(this.props.calendar.companies[index]));
    }

    populateCompanies(company, index) {
            return <MenuItem value={company.name} key={index} primaryText={company.name} />
    }

    render() {
        return (
            <div>
                <SelectField value={this.props.calendar.selectedCompany.name} onChange={this.handleSelectChange} maxHeight={200}>
                    {this.props.calendar.companies.map(this.populateCompanies)}
                </SelectField>
                <ViewCountries selectedCompanyCountries={this.props.calendar.selectedCompany.countries}/>
                <CountryInfo selectedCountry="" selectedCompany="" returns={this.props.calendar.returns}/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log(state)
    return {
        calendar: state.calendar
    };
}

export default connect(mapStateToProps)(CalendarPage);
