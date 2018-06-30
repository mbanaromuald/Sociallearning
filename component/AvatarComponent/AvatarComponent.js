import { Avatar } from 'react-native-elements';
import React from 'react'; 
 import {Alert} from 'react-native'; 


export default class AvatarComp extends React.Component{



    showImage()
    {
        Alert.alert('Image Showed'); 
    }
  
    render()
    {
        return (

            <Avatar
            size="large"
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
            onPress={() => this.showImage() }
            activeOpacity={0.7}
             />

        )
    }
}