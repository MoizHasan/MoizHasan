import React from 'react';
import CalculatorButton from './calculator-button';
import styles from './calculator.module.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '0',
      wasSolved: false,
    };
  }
  
  handleDigitClick = (event) => {
    console.log(this.state.wasSolved)
    var number = event.target.innerHTML;
    if (this.state.expression.length < 13) {
      if (this.state.expression.length > 1) {
        var lastTwo = this.state.expression.substring(this.state.expression.length-2, this.state.expression.length);
        if (!/[+\-x\/]0/.test(lastTwo)) {
          this.setState({
            expression: this.state.expression + number,
          });
        } 
      }

      else if (number !== 0 || this.state.expression !== 0) {
        let newState = this.state.expression === '0' ? number : this.state.expression + number;
        this.setState({
          expression: newState,
        });
      }
      if (this.state.wasSolved) {
        this.setState({
          expression: number,
          wasSolved: false,
        });
      }
    }
  }
  
  handleModifier = (event) => {
    if (this.state.wasSolved) {
      this.setState({wasSolved: false,});
    }
    const button = event.target.innerHTML;
    const lastEntry = this.state.expression.charAt(this.state.expression.length-1);
    let newState;
    if (this.state.expression.length < 13) {
      if (/[\+\-\/x]/.test(lastEntry)) {
        newState = this.state.expression.substring(0, this.state.expression.length-1) + button; 
      } else {
        newState = this.state.expression + button;
      }
      if (this.state.expression === '0' && button === '-') { //remove placeholder zero when negative number
        newState = button;
      }
      this.setState({
        expression: newState,
      });
    }
  }
  
  handleDecimal = (event) => {
    if (this.state.wasSolved) {
      this.setState({wasSolved: false,});
    }
    const lastEntry = this.state.expression.charAt(this.state.expression.length-1);
    let newState;
    if (this.state.expression.length < 13) {
      if (/[\+\-\/x]/.test(this.state.expression)) {
      //check if substring between last operator and end contains a decimal ---match needs to be LAST
      const lastOperator = this.state.expression.split("").reverse().join("").match(/[\+\-\/x]/);
      if (this.state.expression.lastIndexOf('.') < this.state.expression.lastIndexOf(lastOperator)) {
        if (/\d/.test(lastEntry)) {
          newState = this.state.expression + '.';
        } else {
          newState = this.state.expression + '0.';
        }
        this.setState({
          expression: newState,
        });
      }
    } else {
     if (!this.state.expression.includes('.')) {
       this.setState({
        expression: this.state.expression + '.',
      });
     }
   }
 }
}

evaluateExpression = (event) => {
  let expression = this.state.expression;
  if (/[\+\-\/x]/.test(expression)) {
    let n = expression.match(/[\+\-\/x]/g).length;
    var result;
    for (var i = 0; i < n; i++) {
      if (/-?\d+\.?\d*[x|\/]-?\d+\.?\d*/.test(expression)) { //multiply and divide
        var fnc = expression.match(/-?\d+\.?\d*[x|\/]-?\d+\.?\d*/)[0];
        var op = fnc.match(/[x\/]/).index;
        if (fnc.charAt(op) === 'x') {
          result = Number(fnc.substring(0, op)) * Number(fnc.substring(op+1, fnc.length));
        } else {
          result = Number(fnc.substring(0, op)) / Number(fnc.substring(op+1, fnc.length));
        }
        expression = expression.replace(fnc, result);
        continue;
      }
      if (/-?\d+\.?\d*[+|-]\d+\.?\d*/.test(expression)) { //add and subtract starting from left
        fnc = expression.match(/-?\d+\.?\d*[+|-]\d+\.?\d*/)[0];
        op = fnc.match(/[+-]/).index;
        if (op === 0) {
          op = fnc.substring(1, fnc.length).match(/[+-]/).index + 1;
        }
        
        if (fnc.charAt(op) === '+') {
          result = Number(fnc.substring(0, op)) + Number(fnc.substring(op+1, fnc.length));
        } else {
          result = Number(fnc.substring(0, op)) - Number(fnc.substring(op+1, fnc.length));
        }
        expression = expression.replace(fnc, result);
      }
    }
    if (expression.length > 12) {
      expression = expression.substring(0, 13);
    }
    this.setState({
      expression: expression,
      wasSolved: true,
    });
  }
}
  
  clear = (event) => {
    this.setState({
      expression: '0',
    })
  }
  
  render() {
    return (
      <div className={styles.calculator}>
      <div className={styles.display}>
        {this.state.expression}
      </div>
      <section className={styles.primaryButtons}>
        <CalculatorButton id={styles.clear} value="C" handler={this.clear} />
        <CalculatorButton id={styles.divide} value="/" handler={this.handleModifier} />
        <CalculatorButton id={styles.multiply} value="x" handler={this.handleModifier} />
        <CalculatorButton id="seven" value="7" handler={this.handleDigitClick} />
        <CalculatorButton id="eight" value="8" handler={this.handleDigitClick} />
        <CalculatorButton id="nine" value="9" handler={this.handleDigitClick} />
        <CalculatorButton id="add" value="+" handler={this.handleModifier} />
        <CalculatorButton id="four" value="4" handler={this.handleDigitClick} />
        <CalculatorButton id="five" value="5" handler={this.handleDigitClick} />
        <CalculatorButton id="six" value="6" handler={this.handleDigitClick} />
        <CalculatorButton id="subtract" value="-" handler={this.handleModifier} />
        <CalculatorButton id="one" value="1" handler={this.handleDigitClick} />
        <CalculatorButton id="two" value="2" handler={this.handleDigitClick} />
        <CalculatorButton id="three" value="3" handler={this.handleDigitClick} />
        <CalculatorButton id={styles.zero} value="0" handler={this.handleDigitClick} />
        <CalculatorButton id={styles.decimal} value="." handler={this.handleDecimal} /> 
        <CalculatorButton id={styles.equals} value="=" handler={this.evaluateExpression} />
      </section>
    </div>
    )
  }
}

export default Calculator;