import React from 'react'; 
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


  const cardInfo =[
      {
          "name":"", 
          "imageurl":""
      }
  ]

   export default class CardImage extends React.Component{
      
    
    
    render()
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
   }