import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import * as calendarActions from '../../actions/calendarActions';
import * as modalActions from '../../actions/modalActions';

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
    this.disableEndDateHandler = this.disableEndDateHandler.bind(this);
    this.handleRemoval = this.handleRemoval.bind(this);
  }

  handleSelectChange(event, index) {
    this.props.dispatch(calendarActions.selectCompany(this.props.calendar.companies[index - 1]));
  }

  populateCompanies(company, index) {
    return <MenuItem value={company.name} key={index + 1} primaryText={company.name} />;
  }

  setSelectedCountry(index) {
    this.props.dispatch(calendarActions.loadReturns(index, this.props.calendar.selectedCompany.countries[index]));
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
    this.props.dispatch(modalActions.addReturn(newReturn));
    this.props.dispatch(reset('AddReturn'));
  }

  disableEndDateHandler(ev, value) {
    this.props.dispatch(modalActions.disableEndDate(value));
  }

  handleRemoval() {
    this.props.dispatch(calendarActions.removeReturn());
  }

  render() {
    const styles = {
      selectLabel: {
        marginRight: '20px'
      },
      selectContainer: {
        marginBottom: '30px'
      }
    };

    return (
      <div>
        <div className="col-md-12" style={styles.selectContainer}>
          <SelectField value={this.props.calendar.selectedCompany.name} onChange={this.handleSelectChange} maxHeight={200} floatingLabelText="Select Company">
            <MenuItem value={null} key="0" primaryText=" " />
            {this.props.calendar.companies.map(this.populateCompanies)}
          </SelectField>
        </div>
        <div className="col-md-1">
          <ViewCountries selectedCompanyCountries={this.props.calendar.selectedCompany.countries} setSelected={this.setSelectedCountry} selectedCountry={this.props.calendar.selectedCountry} />
        </div>
        {this.props.calendar.selectedCompany.name &&
        <div className="col-md-11">
          <CountryInfo selectedCompany={this.props.calendar.selectedCompany.name} returns={this.props.calendar.returns} loading={this.props.calendar.isLoading} />
          <AddReturnModal
            onOpen={this.handleOpen}
            onClose={this.handleClose}
            open={this.props.calendar.isModalOpen}
            onSubmit={this.handleSubmit}
            country={this.props.calendar.countryName}
            disableEndDateHandler={this.disableEndDateHandler}
            endDateDisabled={this.props.modal.endDateDisabled}
            onRemove={this.handleRemoval} />

        </div>}

      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    calendar: state.calendar,
    modal: state.modal
  };
}

CalendarPage.propTypes = {
  calendar: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(CalendarPage);
