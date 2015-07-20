import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';


let categories = [
  {name: 'Test1'}
];

let style = {
  base: {
    background: '#252a3a',
  }
};


class FavChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {channles: []};
  }
  componentDidMount() {
    fetch('/api/channels')
      .then(res => {
        return res.json();
      }).then(json => {
        console.log('response:', json);

        this.setState({channels: json.channels});
      });
  }
  render() {
    return (
      <div>
        <Menu title='Starred'>
          {this.state.channels && this.state.channels.map(channel => (
            <MenuItem to={`/channel/${channel.name}`}>
              {channel.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {channles: []};
  }
  componentDidMount() {
    fetch('/api/channels')
      .then(res => {
        return res.json();
      }).then(json => {
        console.log('response:', json);

        this.setState({channels: json.channels});
      });
  }
  render() {
    return (
      <div>
        <Menu title='Channels'>
          {this.state.channels && this.state.channels.map(channel => (
            <MenuItem to={`/channel/${channel.name}`}>
              {channel.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

@Radium
export default class Channels extends React.Component {
  render() {
    return (
      <div style={style.base}>
        <FavChannelList />
        <ChannelList />
      </div>
    );
  }
}
