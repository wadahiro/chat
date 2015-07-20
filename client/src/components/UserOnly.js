import React from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  AuthStore: state.AuthStore
}))
export default class UserOnly {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  componentWillMount() {
    this.guestWillTransfer(this.props, this.context.router);
  }

  componentWillUpdate(nextProps) {
    this.guestWillTransfer(nextProps, this.context.router);
  }

  guestWillTransfer(props, router) {
    if (!this.props.AuthStore.isLoggedIn) {
      router.replaceWith('/login');
    }
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
