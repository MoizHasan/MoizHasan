import React from 'react';
import styles from './calculator.module.css';

class CalculatorButton extends React.Component {
  render() {
    return <div className={styles.cBtn} id={this.props.id} onClick={this.props.handler}>{this.props.value}</div>
  }
}

export default CalculatorButton;