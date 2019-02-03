import React, {Component} from 'react';
import FibonacciSeries from '../components/fibonacci.component';

class FibonacciView extends Component {
    constructor(props){
        super();
        this.state= {
            series: []
        }
    }


    componentWillMount() {
        FibonacciSeries.generateFibonacci()
        .then(series =>{
            this.setState({series})
        }) 
        .catch(()=>{
            throw new Error("Error");
        })
    }

    render(){
        return(
            <h1>Hello</h1>
        );
    }

}

export default FibonacciView;


