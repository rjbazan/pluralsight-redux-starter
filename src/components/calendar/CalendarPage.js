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
        this.setSelectedCountry = this.setSelectedCountry.bind(this);
    }

    handleSelectChange(event, index, selectedCompany) {
        this.props.dispatch(calendarActions.selectCompany(this.props.calendar.companies[index]));
    }

    populateCompanies(company, index) {
        return <MenuItem value={company.name} key={index} primaryText={company.name} />
    }

    setSelectedCountry(index) {
        this.props.dispatch(calendarActions.loadReturns())
        this.props.dispatch(calendarActions.loadCountryReturns(this.props.calendar.selectedCompany.countries[index]))
        //this.props.dispatch(calendarActions.selectCountry(this.props.calendar.selectedCompany.countries[index]))
    }

    render() {
        return (
            <div>
                <SelectField value={this.props.calendar.selectedCompany.name} onChange={this.handleSelectChange} maxHeight={200}>
                    {this.props.calendar.companies.map(this.populateCompanies) }
                </SelectField>
                <ViewCountries selectedCompanyCountries={this.props.calendar.selectedCompany.countries} setSelected={this.setSelectedCountry}/>
                <CountryInfo selectedCountry="" selectedCompany="" returns={this.props.calendar.returns} loading={this.props.calendar.isLoading}/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        calendar: state.calendar
    };
}

export default connect(mapStateToProps)(CalendarPage);
