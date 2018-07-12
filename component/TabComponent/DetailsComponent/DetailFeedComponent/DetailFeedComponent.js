import React , {Component} from 'react'
import {Avatar, Icon,} from 'react-native-elements'
import {Image, SectionList , View} from 'react-native'
import  {
  
    Card,
    CardItem,   
    Left, 
    Right ,  
    Container,  
    Button,
    Content, 
    Text, 
    Header
   } from 'native-base'
   import { createStackNavigator } from 'react-navigation'

  
import MoreMenuComp from '../../../MoreMenuComponent/MoreMenuComponent'
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
 <Container>

      <Header style ={{backgroundColor:'#fff', 
                     height:50, 
                     borderBottomColor:'#f1f1f1', 
                     borderBottomWidth:0.8,
                     elevation:3 , 
                     paddingHorizontal:15, 
                     justifyContent:'space-between', 
                     alignItems:'center'
                      }} >

                          <Avatar style={{marginLeft:15}}
                          size="large"
                          rounded
                          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                          activeOpacity={0.7}
                          /> 

                           <View   style={{flexDirection:'row'
                                          }}   >
                                       <Button transparent onPress ={()=>this.props.navigation.navigate('Kamera')}>  
                                             <Icon
                                             iconStyle={{fontSize:18}}
                                             name='video-camera'
                                             type='font-awesome'
                                             color='#000'/>
                                       </Button>
                                       <Button transparent  onPress ={()=>this.props.navigation.navigate('Forum')}>
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


       </Header>

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
          renderSectionHeader={()=>      <View style={{flexDirection:'row',
                                                       backgroundColor:'#fff',
                                                       height:50,
                                                       elevation:3, 
                                                       paddingHorizontal:15,
                                                       justifyContent:'space-between'

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
    

    </Content>
</Container>
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