import React, { Component } from 'react';
import './index.css';
import { MainScreen } from './MainScreen';


export class Homepage extends Component<{}, { buttonPressed: boolean, value: string }> {

  // private buttonPressed = false;
  constructor(props: any) {
    super(props);
    this.state = { buttonPressed: false, value: '' };
    this.changeScreen = this.changeScreen.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  changeScreen() {
    this.setState({ buttonPressed: true });
  }
  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }
  render() {
    console.log("in redner");
    return (
      <div>
        {/* {this.state.buttonPressed} */}
        {(this.state.buttonPressed) && <MainScreen name={this.state.value} />}
        {/* This is Homepage */}
        {(this.state.buttonPressed === false) && (
          <div>
            <p>
              Hi there! Welcome to your education showcase.
          </p>

            <form>
              <label>
                <p>Type your name and click "Enter" to begin!</p>
                <input id="inputName" type="text" placeholder="Your Name" name="name" value={this.state.value} onChange={this.handleChange} />
              </label>

              <div id="button"><a onClick={this.changeScreen}>Enter</a></div>
            </form>
          </div>
        )}
      </div>
    )
  }

}