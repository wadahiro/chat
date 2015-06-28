import subscriber from './room/subscriber';
import Room from './room/room';
import React from 'react';
import { Router, Route, Link } from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';
import App from './views/App';
import About from './views/About';
import Channel from './views/Channel';
import NotFound from './views/NotFound';

require('whatwg-fetch');

window.addEventListener("load", () => {
  console.log('application loaded');

  var routes = (
    <Router history={new HashHistory}>
      <Route path="/" component={App}>
        <Route path="about" component={About}/>
        <Route path="channel/:channel" components={{content: Channel}}>
        </Route>
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>
  );

  React.render(
    routes,
    document.getElementById('app')
  );
});

window.join = function() {
  var el = document.getElementById("user");
  console.log(el.value);
  let room = new Room('lobby', el.value);
  room.ready.then(obj => {
    room.channel.push("new:msg", {user: el.value, body: 'hello'})
    subscriber(room.channel);
  });


  window.send = function() {
    var inputEl = document.getElementById("input");
    room.channel.push("new:msg", {user: el.value, body: inputEl.value})
  }
}
