import React, {RouteHandler} from 'react';
import Navbar from './common/navbar';

class HomePage extends React.Component{
  render () {
    return (
      <div>
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
}

export default HomePage;
