import React, {Component} from 'react';
import firebase from 'firebase';
import Zoom from 'react-reveal/Zoom';

export default class LoggedInHome extends Component {

    componentWillMount = () => {
        
    }

    render(){
        var user = firebase.auth().currentUser;
        return(
            <div>
                <Zoom effect="fadeInUp" effectOut="fadeOutLeft">
                    <h1>Welcome {user.displayName}</h1>
                </Zoom>
            </div>
        )
    }
}
