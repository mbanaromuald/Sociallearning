import React from 'react'; 
import {Icon} from 'react-native-elements'; 


export default class CommentComp extends React.Component{
  
    render()
    {
        return (

            <Icon
            iconStyle={{fontSize:21}}
            name='comment'
            type='font-awesome'
            color='#000'
            />

        )
    }
}
