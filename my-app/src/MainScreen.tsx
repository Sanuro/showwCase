import React, { Component } from 'react';
import './MainScreen.css';


export class MainScreen extends Component<{ name: string }, {}> {
  constructor(props: any) {
    super(props);
    // this.state = { buttonPressed: false, value: '' };
    // this.changeScreen = this.changeScreen.bind(this);
  }
  render() {
    return (
      <div>
        <p>Welcome to {this.props.name}'s education page
        </p>
        <div id="button"><a href="MainScreen.tsx">Enter</a></div>
        <div id="leftBox">
          hello left
        </div>
        <div id="rightBox">
          {/* hello right */}
          <div id="topRight">
            Graduate computer science
            </div>
          <div id="botRight">
            empty box
            </div>
        </div>
      </div>
    )
  }

}