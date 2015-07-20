import React from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  AuthStore: state.AuthStore
}))
export default class GuestOnly {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  componentWillMount() {
    this.userWillTransfer(this.props, this.context.router);
  }

  componentWillUpdate(nextProps) {
    this.userWillTransfer(nextProps, this.context.router);
  }

  userWillTransfer(props, router) {
    if (this.props.AuthStore.isLoggedIn) {
      router.replaceWith('/');
    }
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
