import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

let styles = {
  base: {
    border: 0,
    background: '#303a4b',
    color: '#999',

    height: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,

    ':hover': {
      color: '#fff'
    }
  }
};

@connect(state => ({
  AuthStore: state.AuthStore
}))
@Radium
export default class ProfileMenu extends React.Component {
  render() {
    return (
      <div style={styles.base}>
        <span>{this.props.AuthStore.userName}</span>
      </div>
    );
  }
}
