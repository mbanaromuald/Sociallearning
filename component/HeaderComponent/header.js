import React, {Component} from 'react'; 
import {Alert} from 'react-native'; 
import CenterComp from './centerComponent';
import RigtComp from './rightComponent';
import { Header, Left, Body, Right, Button} from 'native-base';
import Rig2tComp from './right2Component';




export class HeaderTab extends Component {



    getTelevision()
    {
        Alert.alert('Camera showed')
    }

    addUser()
    {
        Alert.alert('Add user')
    }


    sendMessage()
    {
        Alert.alert('send Message')
    }


    render(){
        return(
            
            <Header style= {{backgroundColor:'#fff', 
                            borderBottomColor:'#8C8C8C', 
                            borderBottomWidth:1}} >
              <Left>
                    <CenterComp/>
              </Left>
              <Body>
              </Body>
              <Right>
                 <Button transparent  onPress={()=>this.getTelevision()} >
                     <Rig2tComp/>
                 </Button>
                <Button transparent onPress={()=> this.sendMessage()} >
                     <RigtComp />
                </Button>
             
             </Right>
          </Header>

        )
    }

}