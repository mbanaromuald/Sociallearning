import React,{Component} from 'react'
import {
    View, 
    Text, 
    TextInput
}
from 'react-native'
import {Icon, Avatar } from 'react-native-elements'
import {Button , Textarea , Form, Thumbnail} from 'native-base'

export default class PostComp extends Component{


    constructor(props)
    {
        super(props)
        this.state={
            text:""
        }
    }



    render()
    {
        return(
            <View style={{flex:1 , backgroundColor:'#fff'}}>
                  <View style={{height:55, 
                                backgroundColor:'#fff', 
                                paddingHorizontal:15, 
                                flexDirection:'row', 
                                justifyContent:'space-between', 
                                alignItems:'center'}} >

                                <Icon
                                 iconStyle={{fontSize:20}}
                                 name='times'
                                 type='font-awesome'
                                 color='#000'
                                />

                                <Button transparent rounded dark >
                                    <Text style={{color:'#000', fontSize:18}} > Post </Text>
                                </Button>
                  </View> 
                  <View style={{flexDirection:'row', paddingLeft:15 }} > 
                                
                                <Thumbnail source={{uri:"https://scontent-frt3-1.xx.fbcdn.net/v/t31.0-8/16179578_614075555447236_1148867025839218049_o.jpg?_nc_cat=0&oh=8ae1d1a86c4b1c391135562e7ff68584&oe=5BD100F2"}}/>
                                <Text style={{fontWeight:'bold', marginLeft: 5, color:'#000'}} >
                                    Pierre Patrice Edimo NKoe
                                </Text>
                  </View>  
                  <View style={{flex:1 , padding:15}}>
                         <TextInput
                         style={{ textAlignVertical:'top', fontSize:18, color:'#000'}}
                         placeholder="What are doing ?"
                         onChangeText={(text) => this.setState({text})}
                         underlineColorAndroid='transparent'
                         multiline={true}
                         numberOfLines={4}
                         maxLength={300}
                         />
                  </View>   
                  <View style={{height:50, flexDirection:'row', 
                                paddingLeft:15}}>
                        
                         
                                 <Icon
                                 iconStyle={{fontSize:20}}
                                 name='cog'
                                 type='font-awesome'
                                 color='#000'
                                />
                            
                           
                                <Icon
                                 iconStyle={{fontSize:20, marginLeft:10}}
                                 name='video-camera'
                                 type='font-awesome'
                                 color='#000'
                                />
                    

                      
                  </View>
            </View>
        )
    }
}