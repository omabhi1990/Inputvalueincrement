import React, { Component } from "react";

class A extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {" "}
        Component A
        <input type="number" value={this.props.a} />
      </div>
    );
  }
}
export default A;
