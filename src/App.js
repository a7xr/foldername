import React, { Component } from "react";

class App extends Component {
  // Previous Hello World: https://www.geeksforgeeks.org/build-a-basic-react-app-that-display-hello-world/
  // This SetState: https://www.geeksforgeeks.org/reactjs-setstate/?ref=leftbar-rightbar
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { greeting: "Click the button to receive greetings" };

    // Binding this keyword
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    // Changing state
    this.setState({ greeting: "GeeksForGeeks welcomes you !!" });
  }

  render() {
    return (
      <div>
        <h2>Greetings Portal</h2>
        <p>{this.state.greeting}</p>

        {/* Set click handler */}
        <button onClick={this.updateState}>Click me!</button>
      </div>
    );
  }
}

export default App;
