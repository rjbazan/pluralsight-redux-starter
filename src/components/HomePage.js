import React, {RouteHandler} from 'react';
import Navbar from './common/navbar';
import CoursesPage from './courses/CoursesPage';

class HomePage extends React.Component{
  render () {
    return (
      <div>
        <Navbar/>
        <CoursesPage/>
      </div>
    );
  }
}

export default HomePage;
