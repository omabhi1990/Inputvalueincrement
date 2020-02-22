import React, { Component } from "react";

class B extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Component B<button onClick={this.props.handleInput}>OK</button>
      </div>
    );
  }
}
export default B;
