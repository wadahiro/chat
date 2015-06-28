let handlerLookup = {
  "new:msg": msg => {
    console.log(msg);
    var el = document.getElementById('messages');

    var fragment = document.createDocumentFragment();
    fragment.appendChild(document.createTextNode(`${msg.user}: ${msg.body}`));
    fragment.appendChild(document.createElement("br"));
    el.appendChild(fragment);
  },

  "user:entered": msg => {
    var username = msg.user || "anonymous";
    console.log(`[${username} entered]`);
  }
};

export default function(chan) {
  Object.keys(handlerLookup).map(key => {
    chan.on(key, handlerLookup[key]);
  });
}
