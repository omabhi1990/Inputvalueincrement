import React, { Component } from "react";
import A from "./component/A";
import B from "./component/B";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { v: 0 };
  }
  handleInput = e => {
    e.preventDefault();
    this.setState({ v: this.state.v + 1 });
  };

  render() {
    return (
      <div>
        <A a={this.state.v} />
        <B b={this.handleInput} />
      </div>
    );
  }
}
export default App;
