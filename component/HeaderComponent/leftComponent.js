import React from 'react'; 
import {Icon} from 'react-native-elements'; 


export default class LeftComp  extends React.Component{
  
    render()
    {
        return (

            <Icon
            iconStyle={{fontSize:21}}
            name='user-plus'
            type='font-awesome'
            color='#000'
            />

        )
    }
}