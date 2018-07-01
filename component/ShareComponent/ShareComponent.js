import React from 'react'; 
import {Icon} from 'react-native-elements'; 


export default class ShareComp extends React.Component{
  
    render()
    {
        return (

            <Icon 
            iconStyle={{fontSize:21}}
            name='share-alt'
            type='font-awesome'
            color='#000'
            />

        )
    }
}
