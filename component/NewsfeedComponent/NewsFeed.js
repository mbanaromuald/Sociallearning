import React, {Component } from 'react'; 
import {Icon} from 'react-native-elements'; 
import {ListView, View, Text} from 'react-native'; 

import  {
    Header, 
    Card,
    CardItem,   
    Left, 
    Body, 
    Right , 
    Button,
    Title
   } from 'native-base'; 


import {Image} from 'react-native'; 

import AvatarComp from '../AvatarComponent/AvatarComponent';
import MoreMenuComp from '../MoreMenuComponent/MoreMenuComponent';
import LikesComp from '../LikeComponent/LikeComponent';
import CommentComp from '../CommentComponent/commentComponent';
import ShareComp from '../ShareComponent/ShareComponent';
import SendComp from '../sendComponent/SendComp';




export default class NewsFeedComp extends Component {


   



    constructor(props)
    {
        super(props)

        const cardInfo= [
            {
                "name": "Max Musteman", 
                "imageurl":"https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/24059649_760166427504814_2056107590989211898_o.jpg?_nc_cat=0&oh=5cadf8a524c276c87f4f78a0fd177a24&oe=5BE4E545"
            } ,

            {
                "name": "Pierre Moscovici", 
                "imageurl":"https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/16143461_614075545447237_6793707549122832067_o.jpg?_nc_cat=0&oh=2a5b5fb5b541566f31f3b55082eba8f6&oe=5BA0202E"
            }
        ]

      

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(cardInfo),
          };


          
     
    }


    render()
    {
        return (

            <ListView dataSource={this.state.dataSource}
                      renderRow= {this.renderCard} 
                      style={{backgroundColor:"#f1f1f1"}}
                      contentContainerStyle={{justifyContent:'space-between'}}
                      renderHeader={this.renderHeader}>
                      
            

            </ListView>
            
        )
    }



    renderCard(cardInfo)
    {
     return(


           <View style= {{backgroundColor:'#f1f1f1'}}>

                 <Card>
                   <CardItem bordered>
                        <Left style={{justifyContent:'space-between'}} >
                           <AvatarComp/>
                           <Text style={{fontWeight:'bold', 
                                         color:'#000', 
                                         fontSize:14, 
                                         marginLeft:10,
                                          }} >{cardInfo.name}
                            </Text>
                        </Left>
                        
                        <Body/>

                        <Right>
                           <MoreMenuComp/>
                       </Right>
                   </CardItem>
                   <CardItem cardBody bordered >
                        <Image source={{uri:cardInfo.imageurl}} 
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
                </Card>
                
           </View>
      
       
     )

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


}