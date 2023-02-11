import React, { Component } from "react";

class App extends Component {
  static defaultProps = {
    testTopics: [
      "React JS",
      "Node JS",
      "Compound components",
      "Lifecycle Methods",
      "Event Handlers",
      "Router",
      "React Hooks",
      "Redux",
      "Context",
    ],
  };

  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      testName: "React js Test",
      topics: "",
    };

    // Binding this keyword
    this.updateState = this.updateState.bind(this);
  }

  listOfTopics() {
    return (
      <ul>
        {this.props.testTopics.map((topic) => (
          <li>{topic}</li>
        ))}
      </ul>
    );
  }

  updateState() {
    // Changing state
    this.setState({
      testName: "Test topics are:",
      topics: this.listOfTopics(),
    });
  }

  render() {
    return (
      <div>
        <h2>Test Information</h2>
        <p>{this.state.testName}</p>
        <p>{this.state.topics}</p>
        {/* Set click handler */}
        <button onClick={this.updateState}>Click me!</button>
      </div>
    );
  }
}

export default App;
