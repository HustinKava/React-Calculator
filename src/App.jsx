import React, {Component} from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
// importing mathjs node package
import * as math from 'mathjs';

class App extends Component {
    constructor(props) {
        // We have to call super because we are extending the component class
        super(props)

        // Setting the input as an empty string to begin with
        this.state = {
            input: ''
        };
    }

    // This function will update the input value whenever a button is pressed
    addToInput = (val) => {
        // Updating the state, update the input, it's equal to the current input + the value
        this.setState({input: this.state.input + val});
    }

    // Function to handle the = click event, if we dont then = will display as many times as you click it
    // Mathjs is going to do the math evaluation of the current input
    handleEqual = () => {
        this.setState({input: math.evaluate(this.state.input)})
    }

    render() {
    return ( 
        <div className = "App" >
        <div className='calculator-wrapper'>
        <Input input={this.state.input}>           
        </Input>
        <div className='row'>
        <Button handleClick={this.addToInput}>7</Button>
        <Button handleClick={this.addToInput}>8</Button>
        <Button handleClick={this.addToInput}>9</Button>
        <Button handleClick={this.addToInput}>/</Button>
        </div>
        <div className='row'>
        <Button handleClick={this.addToInput}>4</Button>
        <Button handleClick={this.addToInput}>5</Button>
        <Button handleClick={this.addToInput}>6</Button>
        <Button handleClick={this.addToInput}>*</Button>
        </div>
        <div className='row'>
        <Button handleClick={this.addToInput}>1</Button>
        <Button handleClick={this.addToInput}>2</Button>
        <Button handleClick={this.addToInput}>3</Button>
        <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className='row'>
        <Button handleClick={this.addToInput}>.</Button>
        <Button handleClick={this.addToInput}>0</Button>
        <Button handleClick={() => this.handleEqual()}>=</Button>
        <Button handleClick={this.addToInput}>-</Button>
        </div>
        <div className='row'>
            {/* Creating an anonymous function that sets the state back to an empty string
            when the clear button has been clicked */}
            <ClearButton handleClear={() => this.setState({input: ''})}>
                Clear
            </ClearButton>
        </div>
        </div>
        </div>
    );
}
}

export default App;