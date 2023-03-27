// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timerInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onClickRestartButton = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false, timerInSeconds: 0})
  }

  onClickStopButton = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds + 1,
    }))
  }

  onClickStartButton = () => {
    this.timerId = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  getMinutes = () => {
    const {timerInSeconds} = this.state

    const minutes = Math.floor(timerInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  getSeconds = () => {
    const {timerInSeconds} = this.state

    const seconds = Math.floor(timerInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.getMinutes()}:${this.getSeconds()}`

    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card-container">
          <div className="timer-container">
            <img
              className="logo"
              alt="stopwatch"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="countdown">{time}</h1>
          <div>
            <button
              disabled={isTimerRunning}
              type="button"
              onClick={this.onClickStartButton}
              className="start-button"
            >
              Start
            </button>
            <button
              type="button"
              onClick={this.onClickStopButton}
              className="start-button stop"
            >
              Stop
            </button>
            <button
              type="button"
              onClick={this.onClickRestartButton}
              className="start-button restart"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
