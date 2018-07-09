import React , {Component} from 'react'
import  {
  
  Card,
  CardItem,   
  Left, 
  Body, 
  Right ,  
  Container, 
  Header, 
  Button,
  Content, 
  Text
 } from 'native-base'


 import { HeaderTab  } from "../../HeaderComponent/header"


import {Image, SectionList} from 'react-native'
import {Avatar, Icon} from 'react-native-elements'
import MoreMenuComp from '../../MoreMenuComponent/MoreMenuComponent'
import CardInfo from '../InfoFeedComponent/infoFeed'


export default class DetailsFeedComponent extends Component {



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
                    
                       <Button transparent 
                                style ={{width:200,
                                         marginLeft:90, 
                                         paddingLeft:30}} >
                                 <Text style={{fontSize:8, 
                                               color:'#000'
                                               
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


     render()
     {
       return(
             
                <Container>
                         <HeaderTab/>
                         
                         
                            <Content>
                      
                                   <SectionList
                                   renderItem = {({ item })=>
                                  
                                                                <Card transparent>
                                                                     <CardItem>
                                                                        <Left>
                                                                            <Avatar 
                                                                              size="large"
                                                                              rounded
                                                                              source={{uri:item.avatarImg}}
                                                                              onPress={() => this.showImage() }
                                                                              activeOpacity={0.7}
                                                                            />
                                                                           <Text style={{color:'#000'}}>
                                                                             {item.name}
                                                                           </Text>
                                                                        </Left>
                                                                        <Right>
                                                                            <MoreMenuComp/>
                                                                        </Right>
                                                                     </CardItem>
                                                                     <CardItem cardBody>
                                                                           <Text style={{textAlign:'center'}}
                                                                           > {item.post}
                                                                           </Text>
                                                                     </CardItem>
                                                                     <CardItem>
                                                                         <Image source={{uri:item.imageurl}} 
                                                                          style={{height: 200, width: null, flex: 1}}/>
                                                                     </CardItem>
                                                                     <CardItem>
                                                                          <Text style={{color:'#000',
                                                                                        fontWeight:'bold', 
                                                                                        fontSize:17, 
                                                                                        marginLeft:15, 
                                                                                        marginRight:15 }} >
                                                                              {item.description}
                                                                          </Text>
                                                                     </CardItem>
                                                                     <CardItem>
                                                                           <Text note>{item.timing}</Text>
                                                                     </CardItem>
                                                                </Card>
                                  
                                   
                                  
       }
                                  sections={CardInfo}
                                  keyExtractor={(item, index) => item + index}
                                  renderSectionHeader={this.renderHeader}
                                  />
                            
                      
                            </Content>


                </Container>
       )
     }

}

