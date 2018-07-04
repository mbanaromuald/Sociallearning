import React, {Component} from 'react'
import {Icon } from 'react-native-elements'
import {Container, Content} from 'native-base'
import { HeaderTab } from '../HeaderComponent/header'
import {SectionList, Text} from 'react-native'



export default class FeedComponent extends Component
{

    
    static navigationOptions = {

        tabBarIcon :({tintColor}) =>(
          <Icon
          name='rss-square'
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
           backgroundColor:'red'
       }

  }






    render(){
        return (
            <Container style={{backgroundColor:'#f1f1f1'}} > 

                     <HeaderTab/>

                     <Content>

                           <Text>

                               Hello
                            
                           </Text>

                     </Content>
                
              
                
            </Container>  
        )
    }
}