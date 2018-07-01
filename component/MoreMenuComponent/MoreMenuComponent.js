import React from 'react'; 
import {Icon} from 'react-native-elements'; 


export default class MoreMenuComp  extends React.Component{
  
    render()
    {
        return (

            <Icon
            iconStyle={{fontSize:21}}
            name='ellipsis-v'
            type='font-awesome'
            color='#000'
            />

        )
    }
}