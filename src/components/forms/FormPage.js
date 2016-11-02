import React from 'react';
import {connect} from 'react-redux';
import ExportSettings from './ExportSettings';
import * as formActions from '../../actions/formActions';
class FormPage extends React.Component {

  componentDidMount() {
    console.log('asd')
    formActions.loadAdministration();
  }

  handleSubmit(ev) {
    console.log(ev);
  }
  render() {
    return <ExportSettings onSubmit={this.handleSubmit} countries={[{Country_Id: 1, Name: 'Argentina'}]} adminTypes={[{Id: '1', Name: 'VAT'}]} vatNumberTypes={[{Id: '1', Name: 'VAT'}]} />;
  }
  
}

function mapStateToProps(state, ownProps) {
  console.log(state)
  return {
    administration: state.administration
  };
}

export default connect(mapStateToProps)(FormPage);
