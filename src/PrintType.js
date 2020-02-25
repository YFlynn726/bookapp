import React, { Component } from "react";

class PrintType extends Component {
  render() {
    return (
      <form>
        <label>
          Print Type:
          <select
            name="printType"
            print={this.props.printType}
            //onChange={this.props.onChange}
          >
            <option value="all">All</option>
            <option value="books">Book</option>
            <option value="magazines">Magazines</option>
          </select>
        </label>
      </form>
    );
  }
}

export default PrintType;
