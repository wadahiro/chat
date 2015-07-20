import React from 'react';
import Radium from 'radium';

let style = {
  base: {
    border: 0,
    color: '#fff',
    paddingTop: 15,
    paddingBottom: 15
  }
};

let titleStyle = {
  base: {
    paddingLeft: 10
  }
};

@Radium
export default class Menu extends React.Component {
  render() {
    return (
      <div style={style.base}>
        <MenuTitle title={this.props.title}/>
        <ul>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class MenuTitle extends React.Component {
  render() {
    return (
      <span style={titleStyle.base}>{this.props.title}</span>
    );
  }
}
