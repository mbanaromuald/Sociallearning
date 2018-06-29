import React , {Component } from 'react';   
import {Alert}  from 'react-native'; 
import { Container, Content, Footer, FooterTab, Button , Badge } from 'native-base';
import {Icon } from 'react-native-elements'; 
import { HeaderTab } from './HeaderComponent/header';
 


export default class Home extends Component {


    getHome(){
        Alert.alert('Home Clicked'); 
    }

    getSearch(){
        Alert.alert('Search Clicked'); 
    }

    getUsers(){
        Alert.alert('User Clicked'); 
    }


    getKamera(){
        Alert.alert('Kamera Clicked'); 
    }

    getNotifications(){
        Alert.alert('Notifications  Clicked'); 
    }



    render()
    {
        return (
            <Container>
             <HeaderTab  />  
             <Content />
               <Footer>
                 <FooterTab style = {{backgroundColor:'#fff' , 
                                     justifyContent:'space-around'}}>

                     
                       <Icon
                       name='home'
                       type='font-awesome'
                       color='#000'
                       onPress={() => this.getHome()} />
                     
                       <Icon
                       name='search'
                       type='font-awesome'
                       color='#000'
                       onPress={() => this.getSearch()} />
                   
                       <Icon
                       name='video-camera'
                       type='font-awesome'
                       color='#000'
                       onPress={() => this.getKamera()}/>
                   
                       <Icon
                       name='bell'
                       type='font-awesome'
                       color='#000'
                       onPress={() => this.getNotifications()}/>
                   
                       <Icon
                       name='user'
                       type='font-awesome'
                       color='#000'
                       onPress={()=> this.getUsers()}/>
                 
                 </FooterTab>
              </Footer>
            </Container>
        )
    }
}