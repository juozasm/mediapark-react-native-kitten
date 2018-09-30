import React, { Component } from 'react';
import {Button, View, Text, FlatList, StyleSheet, Image, Platform, TouchableOpacity, TextInput } from 'react-native';
import OfflineNotice from '../components/OfflineNotice'
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import getFilteredList from '../selectors/selector';

class Gallery extends Component {
  state = {
    view30:30,
    view50:50,
    view100:100,
    limit:500,
  }

  changeCurrent = (x) =>{
   //console.warn(x)
    if(x>=0 && x<this.state.limit){
      this.props.getFiltered(Number(x));
    }else{
      console.warn('exceeded max limit or below zero',x)
    }
  }
  loadGalData = () =>{
    let i;
    curr=this.props.filter.current;
    if( curr > 0){
      for (i = 0; i < curr; i++) {
        this.props.getImages(200+i,200+i);
    }
  }
  
}
  componentDidUpdate(){ 
  }
  componentDidMount(){
    this.loadGalData()
  }
  renderItem = ({ item }) => {
    imageView = <Image style={{width: 150, height: 150, alignItems:'center'}} source={{ uri : Platform.OS === 'android' ? 'file://' + item.savedTo : '' + item.savedTo }}/>
    text = <Text>{item.name}</Text>

    //console.warn(item)
    return (
      <TouchableOpacity onPress={()=> {
        this.props.navigation.navigate('GalleryItem', {
          itemDetailed :{
            img:item.savedTo,
            txt:item.name,
            longTxt:item.bio,
            dimensions:item.dimensions,
          }
        })
    }
  }  style={styles.item}>
        {imageView}
        {text}
      </TouchableOpacity>
    );
  }
  render() {
    let gal=this.props.imgData;
    //console.warn(gal);
    return (  
      <View >
      <OfflineNotice />
      <Button
    
        onPress={()=>{this.changeCurrent(30)}}
        title="30"
        color={this.props.filter.current===30?'#841584':'#000000'}
      />
      <Button
     
        onPress={()=>{this.changeCurrent(50)}}
        title="50"
        color={this.props.filter.current===50?'#841584':'#000000'}
      />
      <Button
        
        onPress={()=>{this.changeCurrent(100)}}
        title="100"
        color={this.props.filter.current===100?'#841584':'#000000'}
      />
      <Text>{this.props.filter.current}</Text>
      <Button     
        onPress={()=>{this.changeCurrent(this.props.filter.current-1)}}
        title="-1"
        color={'#000000'}
      /> 
        <Button  
        onPress={()=>{this.changeCurrent( this.props.filter.current+1)}}
        title="+1"
        color={'#000000'}
      />

      <FlatList  
        styles={styles.container}
        data={gal}
        renderItem={this.renderItem}
        keyExtractor = { (gal,index) => index.toString() }
      />
      </View>
    );
  }
}



const mapStateToProps = state => {
  return {
    imgData:getFilteredList(state.imgData, state.filter),
    filter:state.filter
  };
};

export default connect(mapStateToProps,actions)(Gallery);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  }
});