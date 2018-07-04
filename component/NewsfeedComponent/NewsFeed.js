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
                "imageurl":"https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/24059649_760166427504814_2056107590989211898_o.jpg?_nc_cat=0&oh=5cadf8a524c276c87f4f78a0fd177a24&oe=5BE4E545",
                "post":"", 
                "Comment":""
            } ,

            {
                "name": "Pierre Moscovici", 
                "imageurl":"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/16142294_614075542113904_936187153530390760_n.jpg?_nc_cat=0&oh=d8568f0a387a75f708f6ae704f7e08c7&oe=5BA0FFF1", 
                "post":"", 
                "Comment":""
            },
            {
                "name": "Emmanuel Edimo", 
                "post":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                "Comment":""
            }, 
            {
                "name":"Edimo Nkoe",
                "imageurl":"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/16142294_614075542113904_936187153530390760_n.jpg?_nc_cat=0&oh=d8568f0a387a75f708f6ae704f7e08c7&oe=5BA0FFF1", 
                "post":"", 
                "Comment":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
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
                   <CardItem>
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

                   <CardItem>
                           <Text style={{color:'#000',
                                         textAlign:'justify' }} > {cardInfo.Comment} </Text>
                   </CardItem>
                  
                   <CardItem cardBody >
                        <Image source={{uri:cardInfo.imageurl}} 
                         style={{height: 350, width: null, flex: 1}}/>
                    </CardItem>

                    <CardItem cardBody >
                         <Text  style={{color:'#000',
                                        marginLeft:10, 
                                        textAlign:'justify'}} >{cardInfo.post}</Text>
                    </CardItem>
                   <CardItem>
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

   

}