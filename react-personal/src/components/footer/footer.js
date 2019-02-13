import React,{Component} from 'react';
import {Navbar} from 'react-bootstrap';
export default class Footer extends Component {
    render(){
        return(
            <div>
                <Navbar className ="navbar fixed-bottom bg-dark">
                    <a className="text-white center-align">All Right Reserver @foysalahmed.com</a>
                </Navbar>
            </div>
        );
    }
}