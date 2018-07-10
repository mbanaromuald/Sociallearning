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


import {Image, SectionList , View} from 'react-native'
import {Avatar, Icon} from 'react-native-elements'
import MoreMenuComp from '../../MoreMenuComponent/MoreMenuComponent'
import CardInfo from '../InfoFeedComponent/infoFeed'


export default class DetailsFeedComponent extends Component {



  renderHeader()
  {
      return(  
            
                   <View style={{flexDirection:'row',
                                  backgroundColor:'#fff',
                                  height:50,
                                  elevation:3, 
                                  justifyContent:'center'
                                    
                                 }} >

                                 <Text> this is a Header </Text>
                    
                    </View>
             
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
                                                                           <Text style={{textAlign:'center' ,
                                                                                        }}
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

