import React, {Component} from 'react';
import firebase from 'firebase';
import LoggedInHome from './LoggedInHome';
import LoggedOutHome from './LoggedOutHome';

export default class Home extends Component {

    componentWillMount = () => {
        
    }

    render(){
        var user = firebase.auth().currentUser;
        var action;
        if(user){
            action = <LoggedInHome/>
        }
        else{
            action = <LoggedOutHome/>
        }
        return(
            action
        )
    }
}
