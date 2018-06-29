import { Avatar } from 'react-native-elements';
import React from 'react'; 


export default class CenterComp extends React.Component{
  
    render()
    {
        return (

            <Avatar
            size="large"
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
             />

        )
    }
}