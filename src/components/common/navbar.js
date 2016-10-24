import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';

class Navbar extends React.Component {
  changeTab(value) {
    this.value = value;
  }
  render() {
    const styles = {
      navbar: {
        flex: 1
      },
      title: {
        flex: 1
      }
    };
    return (
      <AppBar
        title="React Demo"
        titleStyle={styles.title}
        children={
          <Tabs onChange={this.changeTab} value={this.value} style={styles.navbar}>
            <Tab value={0} label="home" containerElement={<Link to="/" />} />
            <Tab value={1} label="calendar" containerElement={<Link to="/calendar" />} />
            <Tab value={2} label="filings" containerElement={<Link to="/filings" />} />
          </Tabs>}
        />
    );
  }
}

export default Navbar;
