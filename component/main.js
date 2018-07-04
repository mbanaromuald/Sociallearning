import React , {Component } from 'react';   
import { createBottomTabNavigator } from 'react-navigation';
import HomeComponent from './TabComponent/HomeComponent';
import SearchComponent from './TabComponent/SearchComponent';
import FeedComponent from './TabComponent/FeedsComponent';
import NotificationComponent from './TabComponent/NotificationComponent';
import ProfileComponent from './TabComponent/ProfileComponent';


export default class Main extends Component {





    render()
    {
        return (
            <BottomTabNavigator/>
        )
    }
}

 
const  BottomTabNavigator = createBottomTabNavigator({
    Home: HomeComponent , 
    search:SearchComponent,
    feed:FeedComponent, 
    notification: NotificationComponent, 
    profile: ProfileComponent
})