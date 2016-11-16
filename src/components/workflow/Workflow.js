import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import CardForm from './CardForm';
import CardTest from './Card';
import Container from './Container';

class Workflow extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(form) {
    console.log(form);
  }


  render() {
    const styles = {
      selectLabel: {
        marginRight: '20px'
      },
      secondaryBtn: {
        marginLeft: '20px'
      },
      selectContainer: {
        marginBottom: '30px'
      }
    };

    return (
      
      <Container />
         
    );
  }
}

Workflow.propTypes = {

};

export default Workflow;
