import React from 'react';
import {Link} from 'react-router';
import Radium from 'radium';

let categories = [
  {name: 'Test1'}
];

class Profile extends React.Component {
  render() {
    return (
      <header>
        <div>
          <h4>MyName</h4>
        </div>
      </header>
    );
  }
}

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
        <h2>Starred</h2>
        <ul>
          {this.state.channels && this.state.channels.map(channel => (
            <li><Link to={`/channel/${channel.name}`}>{channel.name}aa</Link></li>
          ))}
        </ul>
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
        <h2>Channels</h2>
        <ul>
          {this.state.channels && this.state.channels.map(channel => (
            <li><Link to={`/channel/${channel.name}`}>{channel.name}</Link></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default class IndexSidebar extends React.Component {
  render() {
    return (
      <div>
        <Profile />
        <FavChannelList />
        <ChannelList />
      </div>
    );
  }
}
