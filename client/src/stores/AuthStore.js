
const initialState = {
  isLoggedIn: true,
  userName: 'demo001'
};

export default function handle(state = initialState, action) {
  // this function returns the new state when an action comes
  return state;

  // BUT THAT'S A SWITCH STATEMENT!
  // Right. If you hate 'em, see the FAQ below.
}
