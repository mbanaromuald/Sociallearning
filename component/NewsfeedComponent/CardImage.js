import React from 'react'; 
import { Container, 
         Header, 
         Content, 
         Card,
         CardItem, 
         Text, 
         Button,  
         Left, 
         Body, 
         Right } from 'native-base'; 

import {Image} from 'react-native'; 

import AvatarComp from '../AvatarComponent/AvatarComponent';
import MoreMenuComp from '../MoreMenuComponent/MoreMenuComponent';
import LikesComp from '../LikeComponent/LikeComponent';
import CommentComp from '../CommentComponent/commentComponent';
import RigtComp from '../HeaderComponent/rightComponent';
import ShareComp from '../ShareComponent/ShareComponent';




export default class CardImage extends React.Component{
    render(){
        return(
                <Card>
                    <CardItem>
                        <Left>
                            <AvatarComp/>
                            <Text>Max Musterman</Text>
                        </Left>
                        <Right>
                            <MoreMenuComp/>
                        </Right>
                    </CardItem>
                    <CardItem cardBody>
                         <Image source={{uri:"https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}} 
                         style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Left style={{justifyContent:'space-between'}}>
                            <LikesComp/>
                            <CommentComp/>
                            <RigtComp/>
                        </Left>
                        <Body>
                        </Body>
                        <Right>
                            <ShareComp/>
                        </Right>
                    </CardItem>
                </Card>

        )
    }
}