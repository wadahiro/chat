import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

let styles = {
  base: {
    background: '#303a4b',
    color: '#999',
    height: '100%',

    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
  }
};

@Radium
export default class SideFooter extends React.Component {
  render() {
    return (
      <div style={styles.base}>
        <span>footer</span>
      </div>
    );
  }
}
