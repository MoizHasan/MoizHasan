import React from 'react';
import styles from './calculator.module.css';

const CalculatorButton = (props) =>  {
    return <div className={styles.cBtn} id={props.id} onClick={props.handler}>{props.value}</div>
  }

export default CalculatorButton;