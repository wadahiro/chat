import React from 'react';
import {Router, Route, Link} from 'react-router';
import Radium from 'radium';
import Home from './Home';
import IndexSidebar from './IndexSidebar';

let sidebarStyle = {
  position: 'fixed',
  display: 'block',
  top: '0',
  bottom: '0',
  left: '0',
  width: '260px',
  height: 'auto',
  zIndex: '100'
};

let contentStyle = {
  marginLeft: '260px'
};

//@Radium
export default class App extends React.Component {
  render() {
    return (
      <div>
        <div style={sidebarStyle}>
          {this.props.sidebar || <IndexSidebar/>}
        </div>
        <div style={contentStyle}>
          {this.props.content || <Home/>}
        </div>
      </div>
    );
  }
}
