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
            source={{uri: "https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/16143461_614075545447237_6793707549122832067_o.jpg?_nc_cat=0&oh=2a5b5fb5b541566f31f3b55082eba8f6&oe=5BA0202E"}}
            onPress={() => this.showImage() }
            activeOpacity={0.7}
             />

        )
    }
}