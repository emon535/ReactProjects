import React, {Component} from 'react' ;


class FibonacciSeries extends Component {
    constructor(){
        super();
        this.state = {
            series: []
        };

        this.generateFibonacci = this.generateFibonacci.bind(this);
    }

    generateFibonacci(range){
        return result = range>6
        ? "Too Large Range"
        : console.log()
    }

}


export default FibonacciSeries;