import React, { Component } from "react";

class DisplayUnitComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <label>
            {this.props.displayNames.title}
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            {this.props.displayNames.schoolName}
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            {this.props.displayNames.startDate}
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            {this.props.displayNames.endDate}
            <input type="text" />
          </label>
        </div>
      </div>
    );
  }
}

export default DisplayUnitComponent;
