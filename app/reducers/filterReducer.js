
export default function filterReducer(state = {current:30}, action) {
  switch (action.type) {
    case 'GET_FILTER':
    //console.warn(action.payload) 
    return action.dispatch;
    default:
      return state;
  }
}
