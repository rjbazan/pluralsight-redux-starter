import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  box: {
    border: '1px solid white',
    backgroundColor: 'black',
    color: 'white',
    margin: {
      marginTop: '1px',
      marginBottom: '1px'
    }
  },
  countryBox: {
    paddingLeft: '5px',
    width: '115px',
    height: '35px',
    backgroundColor: '#EFEFEF',
    border: '1px solid #FFF',
    boxShadow: 'none',
    textShadow: 'none',
    cursor: 'pointer',
    display: 'table-cell',
    verticalAlign: 'middle',
    countryName: {
      color: '#434343',
      textAlign: 'left',
      textDecoration: 'none',
      lineHeight: '0px'
    }
  },
  normalizeUl: {
    listStyle: 'none',
    paddingLeft: '5px'
  },
  selected: {
    backgroundColor: '#434343',
    backgroundImage: 'none'
  }
};

class ViewCountries extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.populateCountries = this.populateCountries.bind(this);
  }

  populateCountries(company, index) {
    return (
      <li key={index} onClick={this.props.setSelected.bind(this, index)} style={styles.box.margin}>
        <Paper style={styles.countryBox} className={`${this.props.selectedCountry == index ? 'selected' : ''}`} zDepth={1} id="li">
          <span style={styles.countryBox.countryName} className={`${this.props.selectedCountry == index ? 'country-name' : ''}`}>{company}</span>
        </Paper>
      </li>
    );
  }

  render() {
    return (
      <div>
        <ul style={styles.normalizeUl}>
          {this.props.selectedCompanyCountries.map(this.populateCountries)}
        </ul>
      </div>
    );
  }
}

ViewCountries.propTypes = {
  selectedCountry: PropTypes.number,
  selectedCompanyCountries: PropTypes.array.isRequired,
  setSelected: PropTypes.func
};

export default ViewCountries;
