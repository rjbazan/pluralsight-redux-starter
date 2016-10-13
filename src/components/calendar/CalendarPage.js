import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as calendarActions from '../../actions/calendarActions';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export class CalendarPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            countries:  [' ','USA', 'Belgium', 'Spain', 'New Zeland', 'Australia'],
            selectedCountry: ''
        };
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(event, index, selectedCountry) {
        this.setState({selectedCountry});
        this.props.dispatch(calendarActions.selectCountry(selectedCountry));
    }

    populateCountries(country, index) {
        return <MenuItem value={country} key={index} primaryText={country} />
    }

    render() {
        return (
            <div>
                <SelectField value={this.state.selectedCountry} onChange={this.handleSelectChange} maxHeight={200}>
                    {this.state.countries.map(this.populateCountries)}
                </SelectField>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        calendar: state.selectedCountry
    };
}

export default connect(mapStateToProps)(CalendarPage);
