import React , {Component } from 'react';   
import {Text , View  } from 'react-native'; 
import { Container, Content, Footer, FooterTab, Button , Badge } from 'native-base';
import {Icon } from 'react-native-elements'; 
 


export default class Home extends Component {
    render()
    {
        return (
            <Container>
           
             <Content />
               <Footer>
                 <FooterTab style = {{backgroundColor:'#fff',
                                      borderTopColor:'#000', 
                                      borderTopWidth:0.5 }}   >
                     <Button>
                       <Icon
                       name='home'
                       type='font-awesome'
                       color='#000'
                       />
                     </Button>
                     <Button>
                       <Icon
                       name='search'
                       type='font-awesome'
                       color='#000'
                       />
                     </Button>
                      <Button>
                       <Icon
                       name='video-camera'
                       type='font-awesome'
                       color='#000'
                       />
                     </Button>
                     <Button>
                       <Icon
                       name='bell'
                       type='font-awesome'
                       color='#000'
                        />
                     </Button>
                     <Button>
                       <Icon
                       name='user'
                       type='font-awesome'
                       color='#000'
                        />
                     </Button>
                 </FooterTab>
              </Footer>
            </Container>
        )
    }
}