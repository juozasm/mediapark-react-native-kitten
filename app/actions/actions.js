import * as types from './types';
import RNFetchBlob from 'rn-fetch-blob';
import faker from 'faker';


export function getFiltered(curr){
  return{
    type:types.GET_FILTER,
    dispatch:{
      current:curr
    }
  }
}

export function getImages(randW,randH) {
  const url=`http://placekitten.com/${randW}/${randH}`;
  let galleryItem={};

  return async function (dispatch) {
try{
  await RNFetchBlob
  .config({
    fileCache : true,
    //appendExt : 'jpg'
  })
  .fetch('GET', url)
  .then((res) => {
    galleryItem={
      savedTo:res.path(),
      name: faker.name.findName(),
      bio: faker.lorem.sentences(),
      dimensions:{
        w:randW,
        h:randH
      }
    }
    
  })
}catch{
  //errors here
}

    dispatch({
      type:types.GET_IMAGE_DATA,
      payload:galleryItem
    })
  }
}

