import React ,{Component} from 'react';
import Header from './header/header.js';
import Menu from './menu/menu';
import Footer from './footer/footer';
class Home extends Component{

    render(){
        return(
           <div>
            <Header/>
            <Menu/>
            <Footer/>
           </div>
        )
    }
}

export default Home;