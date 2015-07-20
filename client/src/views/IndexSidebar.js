import React from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import ProfileMenu from './ProfileMenu';
import Channels from './Channels';
import SideFooter from './SideFooter';

let style = {
  base: {
    position: 'absolute',
    width: 220,
    zIndex: 1000
  },
  top: {
    top: 0,
    height: 60
  },
  middle: {
    top: 60,
    height: 'calc(100% - 130px)',
    overflowY: 'scroll',
    background: '#252a3a'
  },
  bottom: {
    bottom: 0,
    height: 70
  }
};

@Radium
export default class IndexSidebar extends React.Component {
  render() {
    return (
      <div>
        <div style={[style.base, style.top]}>
          <ProfileMenu />
        </div>
        <div style={[style.base, style.middle]}>
          <Channels />
        </div>
        <div style={[style.base, style.bottom]}>
          <SideFooter />
        </div>
      </div>
    );
  }
}
