import React ,{Component} from 'react';
import Header from './header/header.js';
import Menu from './menu/menu';
import Footer from './footer/footer';
import {Router, Route} from 'react-router';
import PersonalRouter from '../routes.js';

class Home extends Component{

    render(){
        console.log("emon");
        return(
           <div>
            <Header/>
            <Menu/>
            <PersonalRouter/>
            <Footer/>
            
           </div>
        )
    }
}

export default Home;