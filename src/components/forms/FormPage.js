import React from 'react';
import ExportSettings from './ExportSettings';
class FormPage extends React.Component {

  handleSubmit(ev) {
    console.log(ev);
  }
  render() {
    return <ExportSettings onSubmit={this.handleSubmit}/>;
  }
  
}

export default FormPage;
