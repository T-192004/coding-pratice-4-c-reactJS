// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatBanana = () => {
    const {banana} = this.state
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  eatMango = () => {
    const {mango} = this.state
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  render() {
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="fruits-count-heading">
            Bob ate
            <span className="fruit-count"> {this.state.mango} </span>
            mangoes
            <span className="fruit-count"> {this.state.banana} </span>
            bananas
          </h1>
          <div className="container">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-img"
                alt="fruit-img"
              />
              <button type="button" className="btn" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div type="button" className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-img"
                alt="fruit-img"
              />
              <button type="button" className="btn" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
