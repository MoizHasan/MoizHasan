import React from 'react';
import * as styles from './pomodoro.module.css';
import beep from './beep.mp3';
import { FaPlayCircle, FaPause, FaUndo, FaPlus, FaMinus } from 'react-icons/fa';


class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 0,
      isRunning: false,
      isBreak: false,
    };
    this.incBreak = this.incBreak.bind(this);
    this.decBreak = this.decBreak.bind(this);
    this.incSession = this.incSession.bind(this);
    this.decSession = this.decSession.bind(this);
    this.reset = this.reset.bind(this);
    this.startStop = this.startStop.bind(this);
  }
  
  incSession() {
    if (this.state.sessionLength < 60) {
    this.setState({
      sessionLength: this.state.sessionLength + 1
    });
    }
  }
  
  decSession() {
    if (this.state.sessionLength > 1) {
      this.setState({
        sessionLength: this.state.sessionLength - 1
      });
    }
  }
  
  incBreak() {
    if (this.state.breakLength < 60) {
      this.setState({
        breakLength: this.state.breakLength + 1
      });
    }
  }
  
  decBreak() {
    if (this.state.breakLength > 1) {
      this.setState({
        breakLength: this.state.breakLength - 1
      });
    }
  }
  
  reset() {
    clearInterval(this.timer);
    document.getElementById('beep').pause();
    document.getElementById('beep').currentTime = 0;
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 0,
      isRunning: false,
      isBreak: false,
    })
  }
  
  startStop() {
    if (!this.state.isRunning) { //Timer is either paused or has never been started.
      
      //Timer has never been run.
      if (this.state.timeLeft === 0) { 
        this.setState({
        timeLeft: this.state.sessionLength*60,
      });
    }
        //Start Timer
        this.timer = setInterval(() => {
          
          if (this.state.timeLeft === 0) { //Either a session or break has ended.
            //play audio
            document.getElementById('beep').play();
            if (!this.state.isBreak) { //Session is over
              this.setState({
                isBreak: true,
                timeLeft: this.state.breakLength*60+1, //+1 since 1st instance is immediately decremented.
              });
            } 
            else if (this.state.isBreak) { //Break is over
              this.setState({
                isBreak: false,
                timeLeft: this.state.sessionLength*60+1,
              });  
            }
         }
        //Decrement Timer
        this.setState({
          timeLeft: this.state.timeLeft - 1,
        });
        }, 1000);
      
      this.setState({
        isRunning: true,
      });
    } //stop Timer if it's already running.
    else if (this.state.isRunning) {
      clearInterval(this.timer);
      this.setState({
        isRunning: false,
      });
    }
  }
  
  render() {
    const start = <FaPlayCircle />;
    const stop = <FaPause />;
    let minutes = Math.floor(this.state.timeLeft / 60);
    let seconds = this.state.timeLeft % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedTime = minutes + ':' + seconds;
    return (
    <div className={styles.timer}>
    <audio id="beep" src={beep}></audio>
      <div className={styles.breakToggle}>
        <h3>Break</h3>
        <div className={styles.option}>
        <div id="break-increment" onClick = { this.incBreak }>
          <FaPlus />
        </div>
          <h3 className={styles.breakLength}>{ this.state.breakLength }</h3>
        <div id="break-decrement" onClick = { this.decBreak }>
          <FaMinus />
        </div>
      </div>
        </div>
      <div className={styles.sessionToggle}>
        <h3 id="session-label">Session</h3>
        <div className={styles.option}>
        <div id="session-increment" onClick = { this.incSession }>
          <FaPlus />
        </div>
          <h3 className={styles.sessionLength}>{ this.state.sessionLength }</h3>
        <div id="session-decrement" onClick = { this.decSession }>
          <FaMinus />
        </div>
      </div>
      </div>
        <div id="session">
      <div id={styles.sessionLabel}>{this.state.isBreak ? 'Break' : 'Session'}</div> 
      <div className={styles.timeLeft}>{ formattedTime }</div>
          
          <nav className={styles.controls}>
      <div className={styles.timerButton} onClick = { this.startStop }>
        {this.state.isRunning ? stop : start}
      </div>
      <div id={styles.timerButton} onClick = { this.reset }>
        <FaUndo />
       </div>
        </nav>
        </div>
      </div>
      )
  }
};

export default Pomodoro;