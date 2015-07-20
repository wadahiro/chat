import subscriber from './room/subscriber';
import Room from './room/room';
import React from 'react';
import {Router, Route, Link} from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';
import App from './views/App';
import Home from './views/Home';
import About from './views/About';
import Channel from './views/Channel';
import NotFound from './views/NotFound';
import Login from './views/Login';
import Signup from './views/Signup';
import UserOnly from './components/UserOnly';
import GuestOnly from './components/GuestOnly';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import * as reducers from 'stores';


const reducer = combineReducers(reducers);
const store = createStore(reducer);

require('whatwg-fetch');

window.addEventListener("load", () => {
  console.log('application loaded');

  React.render(
    <Provider store={store}>
      {renderRoutes.bind(null, history)}
    </Provider>,
    document.getElementById('app')
  );
});

function renderRoutes () {
  return (
    <Router history={new HashHistory}>
      <Route component={UserOnly}>
        <Route path="/" component={App}>
          <Route path="/about" component={About}/>
          <Route path="/channel/:channel" components={{content: Channel}}>
          </Route>
        </Route>
      </Route>
      <Route component={GuestOnly}>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>
  );
}

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
