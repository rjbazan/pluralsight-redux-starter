import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as calendarActions from '../../actions/calendarActions';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import ViewCountries from './ViewCountries';
import CountryInfo from './CountryInfo';
import AddReturnModal from './AddReturnModal';

export class CalendarPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.setSelectedCountry = this.setSelectedCountry.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSelectChange(event, index, selectedCompany) {
        this.props.dispatch(calendarActions.selectCompany(this.props.calendar.companies[index]));
    }

    populateCompanies(company, index) {
        return <MenuItem value={company.name} key={index} primaryText={company.name} />
    }

    setSelectedCountry(index) {
        this.props.dispatch(calendarActions.loadReturns(index));
        this.props.dispatch(calendarActions.loadCountryReturns(this.props.calendar.selectedCompany.countries[index]));
        //this.props.dispatch(calendarActions.selectCountry(this.props.calendar.selectedCompany.countries[index]))''
    }

    handleOpen() {
        this.props.dispatch(calendarActions.openModal(true));
    }

    handleClose() {
        this.props.dispatch(calendarActions.openModal(false));
    }

    handleSubmit(newReturn) {
        this.props.dispatch(calendarActions.addReturn(newReturn));
    }

    render() {
        return (
            <div>
                <div className="col-md-12" style={{marginBottom: '30px'}}>
                    <span style={{marginRight: '20px'}}>Select Company</span>
                    <SelectField value={this.props.calendar.selectedCompany.name} onChange={this.handleSelectChange} maxHeight={200}>
                        {this.props.calendar.companies.map(this.populateCompanies) }
                    </SelectField>
                </div>
                <ViewCountries selectedCompanyCountries={this.props.calendar.selectedCompany.countries} setSelected={this.setSelectedCountry} selectedCountry={this.props.calendar.selectedCountry}/>
                <CountryInfo selectedCountry="" selectedCompany="" returns={this.props.calendar.returns} loading={this.props.calendar.isLoading}/>
                <AddReturnModal handleOpen={this.handleOpen} handleClose={this.handleClose} open={this.props.calendar.isModalOpen} handleSubmit={this.handleSubmit} btnLabel="Add Return" dialogTitle="Add Return"/>

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
