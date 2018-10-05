# Kitten app


## Installation
1. git clone https://github.com/juozasm/mediapark-react-native-kitten.git
2. npm install

### Signed compiled version of the app stored in root riectory: app-release.apk

## What is done and  whats not and mini comments:

#### Done: Have two routes:
app/views/
 Primary route (view): Gallery.js, Secondary: GalleryItem.js
 Secondary route (view) should be kitten info view
 
#### DONE: List should display random kitten images with randomly generated names.
comment: images are pseudo random other data randomized using faker library

#### DONE: User should be able to specify count of displayed kitten items
comment: by + / - funcionality

#### DONE: RN application should have basic navigation (from List view to Kitten view and back). 
Comment: You can tap on it and go back from there. (ios and android support)
used react navigation for that navigation.

#### DONE: App should have a filter popup which allows user to specify how many items to show using placekitten.com API (30/50/100).
Comment: Isnt a popup but header. Just started to learn React Native, not so good at React Native styling, dont know it good yet, better at funcionality.

#### DONE: On application startup all images should be retrieved form API and each kitten should be assigned with randomly retrieved name from names array.
Comment: Can be optimized a little more. Didnt saved in asyncStorage, wasnt fas enough to implement saving in asyncStorage, it's harder. You can't
save images there, but i did chached images with 'rn-fetch-blob' library.

#### NOT DONE: Application should show some sort of progress (loading) indicator while images are being fetched.
Comment: As i said not very good at styling write now, didn't put mush time in it, was more focused on funcionality. 

#### DONE In Kitten view application should render kitten image at the top followed by it’s name and display kitten description below (Lorem Ipsum).
Comment: Used faker library.

#### DONE  In List view application should render all kittens as list items.

#### DONE/NOT DONE If there are no internet connection user should see message with relevant information (it could be modal popup or text element in empty kitten list), for example “Couldn't connect to the internet”.
 Comment: Used library, not tested is it working.

## BONUS

#### DONE Allow user to specify count of items to retrieve 
comment: +/- function

#### DONE Generate signed .apk file, release version
comment: Added to root directory app-release.apk

#### NOT DONE Write tests for chosen react-native component
comment: Not used testing ever for react, wasn't to try time to implement.
#### DONE Store kitten data in app redux state
Comment: stored in redux state.

#### HALF DONE When all data is fetched for the first time store data in AsyncStorage, to allow user to review kittens when offline
Comment: Images are stored in cache , but info are not. Didnt used AsyncStorage.

## Summary

Tried at my best: 12-14 hours of pure work.
Sorry that design isn't great, just strating/started using / learning React Native. In the past used React with SASS, styling is very difffrent if RN
And didn't statred learning yet, but now will learn more about styling apps.

Thank you for stimulus and motivation to do something practical wwith React native and Redux.
Learned many things while runing to a problems while proggramed.





