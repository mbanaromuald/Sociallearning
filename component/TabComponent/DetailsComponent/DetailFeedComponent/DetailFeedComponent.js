import React , {Component} from 'react'
import {Avatar, Icon,} from 'react-native-elements'
import {Image, SectionList , View, Text} from 'react-native'
import  {
    Button, 
    Thumbnail
   } from 'native-base'
   import { createStackNavigator } from 'react-navigation'

  

import CardInfo from '../../InfoFeedComponent/infoFeed'
import PostComp from '../ChildFeedComponent/postFormComp';
import NewsComponent from '../ChildFeedComponent/NewsComp';
import JobsAlertComponent from '../ChildFeedComponent/JobsAlertComp';
import ForumComp from '../ChildFeedComponent/ForumComp';
import CameraComp from '../ChildFeedComponent/KameraComp';
import MessageComp from '../ChildFeedComponent/Message';


class DetailsFeedComponent extends Component {
  
  
    render(){
        return (                                 
 <View style={{flex:1 , backgroundColor:'#f1f1f1'}} >

      <View style ={{backgroundColor:'#fff', 
                     height:50, 
                     borderBottomColor:'#f1f1f1', 
                     borderBottomWidth:0.8,
                     elevation:3 , 
                     paddingHorizontal:15, 
                     justifyContent:'space-between', 
                     alignItems:'center', 
                     flexDirection:'row'
                      }} >

                        
                        <Thumbnail small source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}} /> 

                           <View  style={{flexDirection:'row',
                                          justifyContent:'space-between', 
                                               }}>
                                       <Button transparent onPress ={()=>this.props.navigation.navigate('Kamera')}
                                       style={{marginRight:15}} >  
                                             <Icon
                                             iconStyle={{fontSize:18}}
                                             name='video-camera'
                                             type='font-awesome'
                                             color='#000'/>
                                       </Button>
                                       <Button transparent  onPress ={()=>this.props.navigation.navigate('Forum')}
                                       style={{marginRight:15}}>
                                             <Icon
                                             iconStyle={{fontSize:18}}
                                             name='users'
                                             type='font-awesome'
                                             color='#000'/>
                                      </Button>
                                      <Button transparent   onPress ={()=>this.props.navigation.navigate('Message')}>
                                             <Icon
                                             iconStyle={{fontSize:18}}
                                             name='paper-plane'
                                             type='font-awesome'
                                             color='#000' />
                                      </Button>
                          </View>


       </View>

    <View style ={{flex:1 , backgroundColor:'#f1f1f1'}} >
           <SectionList
           renderItem = {({ item })=>
          
                                        <View style={{flexDirection:'column',
                                                     backgroundColor:'#fff' , 
                                                     marginTop:10}} >
                                            
                                             

                                                 <View style={{flexDirection:'row',
                                                              height:55,
                                                              paddingHorizontal:15,
                                                              justifyContent:'space-between', 
                                                              alignItems:'center'  }} >

                                                              <View style={{flexDirection:'row'}}>

                                                                    <Thumbnail small source={{uri:item.avatarImg}}/>
                                                                    <Text style={{color:'#000', 
                                                                                  marginLeft:4,
                                                                                  fontSize:14 }}>
                                                                            {item.name}
                                                                      </Text>
                                                 
                                                               </View>
                                                                                           
                                                               <Icon
                                                               iconStyle={{fontSize:18}}
                                                               name='ellipsis-v'
                                                               type='font-awesome'
                                                               color='#000'
                                                                 />


                                                 </View>
                      
                                                 <View style={{alignItems:'center'}} >
                                                       <Text style={{textAlign:'center', color:'#000' , fontSize:17}} >{item.post}</Text>
                                                </View>
                                             <View style={{padding:15}} >
                                                 <Image source={{uri:item.imageurl}} 
                                                  style={{height: 200, width: null, flex: 1}}/>
                                             </View>
                                             <View style={{flexDirection:'column',
                                                          paddingHorizontal:15,
                                                          alignItems:'flex-start'}} >
                                                  <Text style={{color:'#000',
                                                                textAlign:'justify', 
                                                                fontSize:17, 
                                                                
                                                                }} >
                                                      {item.description}
                                                  </Text>

                                                  <Text style={{color:'#808080',
                                                                textAlign:'left', 
                                                                fontSize:14}} >{item.timing}</Text>

                                             </View>
                                            
                                                   
                                           
                                        </View>
          
           
          
}
          sections={CardInfo}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={()=>      <View style={{flexDirection:'row',
                                                       backgroundColor:'#fff',
                                                       height:50,
                                                       elevation:3, 
                                                       paddingHorizontal:15,
                                                       justifyContent:'space-between', 
                                                       borderBottomColor:'#f1f1f1', 
                                                       borderBottomWidth:1
                                                        }} >

                                                             <Icon
                                                              iconStyle={{fontSize:20}}
                                                              name='briefcase'
                                                              type='font-awesome'
                                                              color='#000'
                                                              onPress={()=>this.props.navigation.navigate('JobsAlert')}
                                                              />


                                                             <Button transparent rounded  onPress={() =>this.props.navigation.navigate('PostPage')}  >
                                                                   <Text style ={{color:'#000', fontSize:13 }} > what are you doing ? </Text>
                                                             </Button>


                                                               <Icon
                                                               iconStyle={{fontSize:20}}
                                                               name='hacker-news'
                                                               type='font-awesome'
                                                               color='#000'
                                                               onPress={()=>this.props.navigation.navigate('NewsPage')}
                                                                 />


                                           </View> }
          />

              
    

    </View>
</View>
        )
    }
}


const DetailsFeedStack = createStackNavigator(
    {
        Details : DetailsFeedComponent, 
        PostPage : PostComp ,
        NewsPage: NewsComponent, 
        JobsAlert: JobsAlertComponent, 
        Forum: ForumComp, 
        Kamera: CameraComp, 
        Message: MessageComp
    }, 
    {
        headerMode:'none', 
        initialRouteName:'Details'
    }
)


export default DetailsFeedStack