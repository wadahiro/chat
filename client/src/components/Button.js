import React from 'react';
import Radium from 'radium';

let styles = {
  base: {
    background: 'blue',
    border: 0,
    borderRadius: 4,
    color: 'white',
    padding: '1.5em'
  }
};

@Radium
export default class Button extends React.Component {
  render() {
    return (
      <button style={styles.base}>
        {this.props.children}
      </button>
    );
  }
}
