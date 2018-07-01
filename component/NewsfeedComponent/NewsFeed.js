import React, {Component } from 'react'; 

import {ListView} from 'react-native'; 

import  { Container, 
    Header, 
    Content, 
    Card,
    CardItem, 
    Text, 
    Button,  
    Left, 
    Body, 
    Right , 
    List , 
    ListItem } from 'native-base'; 


import {Image} from 'react-native'; 

import AvatarComp from '../AvatarComponent/AvatarComponent';
import MoreMenuComp from '../MoreMenuComponent/MoreMenuComponent';
import LikesComp from '../LikeComponent/LikeComponent';
import CommentComp from '../CommentComponent/commentComponent';
import RigtComp from '../HeaderComponent/rightComponent';
import ShareComp from '../ShareComponent/ShareComponent';




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
                      style={{backgroundColor:"#f1f1f1"}}>
                      
            

            </ListView>
            
        )
    }



    renderCard(cardInfo)
    {
     return(
        <Card>
        <CardItem bordered>
            <Left>
                <AvatarComp/>
                <Text>{cardInfo.name}</Text>
            </Left>
            <Right>
                <MoreMenuComp/>
            </Right>
        </CardItem>
        <CardItem cardBody bordered >
             <Image source={{uri:cardInfo.imageurl}} 
             style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem bordered >
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