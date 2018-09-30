export default function galReducer(state = [], action) {
  switch (action.type) {
    case 'GET_IMAGE_DATA':
    //console.warn(action.payload)     
    return [...state,  action.payload];
    default:
      return state;
  }
}
