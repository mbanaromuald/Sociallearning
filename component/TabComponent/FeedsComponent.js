import React , {Component} from 'react'
import DetailsFeedComponent from '../TabComponent/DetailsComponent/DetailsFeedComp'
import { createStackNavigator } from 'react-navigation'
import {Icon } from 'react-native-elements'





export default class FeedComponent extends Component {


   
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
    return(
          <StackNavitor/>
    )
  }
}


const StackNavitor = createStackNavigator(
  {
      Details : DetailsFeedComponent 
  }, 
  {
    headerMode: 'none'
  }
  
)
