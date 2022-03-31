// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {charactersCount: 0}

  charactersChange = event => {
    this.setState({charactersCount: event.target.value.length})
  }

  render() {
    const {charactersCount} = this.state

    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label htmlFor="label" className="input-label">
            Enter the phrase
          </label>
          <input
            type="text"
            onChange={this.charactersChange}
            placeholder="Enter the phrase"
            className="text-input"
            id="label"
          />
          <p className="letters-button">No.of letters: {charactersCount}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
