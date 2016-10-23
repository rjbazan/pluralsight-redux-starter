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

const countryBox = {
    paddingLeft: '5px',
    width: '115px',
    height: '29px',
    backgroundColor: '#EFEFEF',
    border: '1px solid #FFF',
    boxShadow: 'none',
    textShadow: 'none',
    cursor: 'pointer',
    lineHeight: '19px',
    fontSize: '10.0pt',
    display: 'table-cell',
    verticalAlign: 'middle',
    countryName: {
        color: '#434343',
        textAlign: 'left',
        textDecoration: 'none',
        fontSize: '10.0pt',
        lineHeight: '0px',
    }
}

const normalizeUl = {
    listStyle: 'none',
    paddingLeft: '5px'
}

const selected = {
     backgroundColor: '#434343',
     backgroundImage: 'none'
}

class ViewCountries extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.populateCountries = this.populateCountries.bind(this);
    }

    populateCountries(company, index) {
        return (
            <li key={index} onClick={this.props.setSelected.bind(this, index)}>
                <div style={countryBox} className={`${this.props.selectedCountry == index ? 'selected' : ''}`}>
                    <span style={countryBox.countryName} className={`${this.props.selectedCountry == index ? 'country-name' : ''}`}>{company}</span>
                </div>
            </li>
        );
    }

    render() {
        return (
            <div>
                <ul style={normalizeUl}>
                    {this.props.selectedCompanyCountries.map(this.populateCountries)}
                </ul>
            </div>
        );
    }
}

export default ViewCountries;
