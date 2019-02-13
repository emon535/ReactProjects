import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';

export default class Meunu extends Component{
    render(){
        return(
           <Navbar className="bg-warning navbar with form ul.nav justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href ="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="works">Works</Nav.Link>
            </Nav.Item>
           </Navbar>
        )
    }
}

