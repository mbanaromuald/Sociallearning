import React, {Component} from 'react'
import {Text, View , ListView} from 'react-native'
import {Icon} from 'react-native-elements'

export default class NotificationComponent extends Component
{


    
    static navigationOptions = {

        tabBarIcon :({tintColor}) =>(
          <Icon
          name='bell'
          type='font-awesome'
          color='#000'
          iconStyle={{fontSize:25, color:tintColor}} />
        ), 
        tabBarOptions:{
            activeTintColor: 'blue',
            inactiveTintColor: '#000',
            showLabel:false, 
            style:{
                backgroundColor:'#fff'
            }
        },
        style:{
            backgroundColor:'red', 
          
        }

  }




    render(){
        return (
            <View>
                <Text>
                    Hello Notification
                </Text>
            </View>
        )
    }
}