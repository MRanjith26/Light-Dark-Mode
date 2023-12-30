import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  onChange = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  changeBackGround = () => {
    const {isLightMode} = this.state
    return isLightMode ? 'light' : 'dark'
  }

  changeText = () => {
    const {isLightMode} = this.state
    return isLightMode ? 'Dark Mode' : 'Light Mode'
  }

  changeColor = () => {
    const {isLightMode} = this.state
    return isLightMode ? 'black' : 'white'
  }

  render() {
    const buttonContainer = this.changeBackGround()

    const buttonText = this.changeText()

    const textColor = this.changeColor()

    return (
      <div className="bg-container">
        <div className={`container ${buttonContainer}`}>
          <h1 className={`title ${textColor}`}>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onChange}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
