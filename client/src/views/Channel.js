import React from 'react';

export default class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {msgs: []};
  }
  componentWillReceiveProps(nextProps) {
    console.log('didMount:', nextProps.params.channel)
    fetch(`/api/channels/${nextProps.params.channel}`)
      .then(res => {
        return res.json();
      }).then(json => {
        console.log('response4:', json);

        this.setState({msgs: json.msgs});
      });
  }
  render() {
    return (
      <div>
        {this.state.msgs.map(msg => (
          <div key={msg.id}>
            <span>{msg.name}:</span>
            <span>{msg.msg}</span>
          </div>
        ))}
      </div>
    );
  }
}
