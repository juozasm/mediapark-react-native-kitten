import React, {Component} from 'react';
import OfflineNotice from '../components/OfflineNotice'
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class GalleryItem extends Component {
  render() {
    const {itemDetailed} = this.props.navigation.state.params;
    //console.warn(itemDetailed);
    return (
      <View style={styles.container}>
        <OfflineNotice />
        <Image style={{width: itemDetailed.dimensions.w, height: itemDetailed.dimensions.h}} source={{ uri : Platform.OS === 'android' ? 'file://' + itemDetailed.img : '' + itemDetailed.img }}/>
        <Text>{itemDetailed.txt}</Text>
        <Text>{itemDetailed.longTxt}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
