import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SampleComponent from './components/sample.component';
import registerServiceWorker from './registerServiceWorker';
import FibonacciView from '../src/view/FibonacciView';
import FibonacciSeries from '../src/components/fibonacci.component';



ReactDOM.render(<FibonacciView />, document.getElementById('root'));
registerServiceWorker();