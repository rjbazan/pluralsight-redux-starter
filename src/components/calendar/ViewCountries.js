import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as calendarActions from '../../actions/calendarActions';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const box = {
    border: '1px solid white',
    backgroundColor: 'black',
    color: 'white'
}

export class ViewCountries extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.setSelected = this.setSelected;
        this.populateCountries = this.populateCountries.bind(this);
    }

    populateCountries(company, index) {
        return (
            <li key={index} onClick={this.setSelected.bind(this, index)}>
                <div style={box}>
                    <span>{company}</span>
                </div>
            </li>
        );
    }

    setSelected(index) {
        this.props.dispatch(calendarActions.selectCountry(this.props.selectedCompanyCountries[index]))
    }

    render() {
        return (
            <div>
                <h4>Administration Setup</h4>
                <ul>
                    {this.props.selectedCompanyCountries.map(this.populateCountries)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        calendar: state.calendar
    };
}

export default connect(mapStateToProps)(ViewCountries);
