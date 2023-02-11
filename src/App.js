import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      count: 0,
    };

    // Binding this keyword
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    // Changing state
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <div>
        <h2>Click Counter</h2>
        <p>You have clicked me {this.state.count} times.</p>
        {/* Set click handler */}
        <button onClick={this.updateState}>Click me!</button>
      </div>
    );
  }
}

export default App;
