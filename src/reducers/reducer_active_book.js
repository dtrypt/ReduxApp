// State argument is not application state, only state reducer is responsible for.
//action is defined in action/index.js
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}
