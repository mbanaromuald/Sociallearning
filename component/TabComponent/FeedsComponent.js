import React, {Component} from 'react'
import {Icon } from 'react-native-elements'

import { HeaderTab } from '../HeaderComponent/header'
import {SectionList, Text} from 'react-native'
import CardInfo from './InfoFeedComponent/infoFeed';


import  {
  
    Card,
    CardItem,   
    Left, 
    Body, 
    Right ,  
    Container, 
    Content
   } from 'native-base'; 


import {Image} from 'react-native'; 

import AvatarComp from '../AvatarComponent/AvatarComponent';
import MoreMenuComp from '../MoreMenuComponent/MoreMenuComponent';
import LikesComp from '../LikeComponent/LikeComponent';
import CommentComp from '../CommentComponent/commentComponent';
import ShareComp from '../ShareComponent/ShareComponent';
import SendComp from '../sendComponent/SendComp';



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

  renderHeader()
  {
      return(
          <Header style={{borderBottomColor:'#f1f1f1' , 
                          borderBottomWidth:0.8, 
                          borderTopColor:'#f1f1f1', 
                          borderTopWidth:0.8, 
                          backgroundColor:'#fff'}} >

                <Left>
                   <Icon
                    iconStyle={{fontSize:20}}
                    name='briefcase'
                    type='font-awesome'
                    color='#000'
                    />
                </Left>
                <Body>
                    
                       <Button  bordered rounded dark 
                                style ={{width:200,
                                         marginLeft:90, 
                                         paddingLeft:30}} >
                                 <Text style={{fontSize:12 
                                              }}>
                                              what are you doing now?
                                  </Text>
                       </Button>
                    
                </Body>
                <Right>
                   <Icon
                    iconStyle={{fontSize:20}}
                    name='hacker-news'
                    type='font-awesome'
                    color='#000'
                    />
                
                </Right>
          </Header>
      )
  }







    render(){
        return (
            <Container style={{backgroundColor:'#f1f1f1'}} > 

                     <HeaderTab/>

                     <Content>

                           <SectionList
                           renderItem = {( { item })=>               
                           <Card>
                           <CardItem bordered>
                                <Left style={{justifyContent:'space-between'}} >
                                   <AvatarComp/>
                                   <Text style={{fontWeight:'bold', 
                                                 color:'#000', 
                                                 fontSize:14, 
                                                 marginLeft:10,
                                                  }} >{item.name}
                                    </Text>
                                </Left>
                                
                                <Body/>
              
                                <Right>
                                   <MoreMenuComp/>
                               </Right>
                           </CardItem>
                           <CardItem cardBody bordered >
                                <Image source={{uri:item.imageurl}} 
                                 style={{height: 350, width: null, flex: 1}}/>
                            </CardItem>
                           <CardItem bordered >
                                <Left style={{justifyContent:'space-between'}}>
                                   <LikesComp/>
                                   <CommentComp/>
                                   <SendComp/>
                                </Left>
                                <Body/>
                                <Right>
                                  <ShareComp/>
                                </Right>
                           </CardItem>
                        </Card>}                
                        
                        sections={CardInfo}
                        keyExtractor={(item, index) => item + index}
                        renderSectionHeader={this.renderHeader}
                        />


                     </Content>
                
              
                
            </Container>  
        )
    }
}