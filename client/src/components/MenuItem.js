import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';
import _ from 'lodash';

let style = {
  base: {
    // background: '#191818',
    border: 0,
    listStyleType: 'none',

    ':hover': {
      background: '#373c5a'
    }
  },
  active: {
    background: '#1f8dd6',
    ':hover': {
      background: '#1f8dd6'
    }
  }
};

let linkStyle = {
  base: {
    color: '#999',
    paddingLeft: '15px',
    display: 'block',
    textDecoration: 'none'
  },
  active: {
    color: '#fff'
  }
};

@Radium
export default class MenuItem extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    let isActive = this.context.router.isActive(this.props.to, this.props.params, this.props.query);
    return (
      <li style={[style.base, isActive && style.active]}>
        <Link to={this.props.to} style={_.extend({}, linkStyle.base, isActive && linkStyle.active)}>
          {this.props.children}
        </Link>
      </li>
    );
  }
}
