import React, {Component} from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import galReducer from './reducers/galReducer';
import filterReducer from './reducers/filterReducer';
import Gallery from './views/Gallery';
import GalleryItem from './views/GalleryItem';

const RootStack = createStackNavigator(
  {
    Gallery: {
      screen: Gallery,
      navigationOptions: {
      title: 'Gallery',
      header: null
    },
    },
    GalleryItem: GalleryItem,
  },
  {
    initialRouteName: 'Gallery',
  }
 
);



const allReducers = combineReducers({
  imgData:galReducer,
  filter:filterReducer
})
const store = createStore(allReducers, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack/>
      </Provider>
    );
  }
}
