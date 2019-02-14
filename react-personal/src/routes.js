import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './components/contents/about';
import Home from './components/home';
import Works from './components/contents/works';

export default class PersonalRouter extends Component {
    
    static routing = (
            <Router>
                <div>
                    <Route path="/about" component ={About}/>
                    <Route path="/" component ={Home}/>
                    <Route path="/works" component ={Works}/>
                </div>
           </Router>
    );

    
}