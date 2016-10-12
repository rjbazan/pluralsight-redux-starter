import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [];
for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

export class CalendarPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            countries:  ['USA', 'Belgium', 'Spain', 'New Zeland', 'Australia'],
            value: 10
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value) {
        this.setState({value});
    }

    populateCountries(country, index) {
        return <MenuItem value={country} key={index} primaryText={`${country}`} />
    }

    render() {
        return (
            <div>
                <SelectField value={this.state.value} onChange={this.handleChange} maxHeight={200}>
                    {this.state.countries.map(this.populateCountries)}
                </SelectField>
            </div>
        );
    }
}

export default CalendarPage;
