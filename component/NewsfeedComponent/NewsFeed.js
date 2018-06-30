import React, {Component } from 'react'; 
import { Content } from 'native-base';
import CardImage from './CardImage';


export default class NewsFeedComp extends Component {
    render()
    {
        return (

            <Content style={{backgroundColor:'#e3e3e3'}}>

                  <CardImage/>
             
            </Content>
        )
    }
}