import React, {Component} from 'react'; 



import LeftComp from './leftComponent';
import CenterComp from './centerComponent';
import RigtComp from './rightComponent';
import { Header } from 'react-native-elements';





export class HeaderTab extends Component {


    render(){
        return(
            
           <Header
          
           backgroundColor='#fff'
           leftComponent={<LeftComp/>}
           centerComponent={<CenterComp/>}
           rightComponent={<RigtComp/>}
           />

        )
    }

}