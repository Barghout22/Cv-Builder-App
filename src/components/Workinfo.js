import React, { Component } from "react";
import uniqid from "uniqid";
import DisplayUnitComponent from "./DisplayUnitComponent";

class WorkInfo extends Component {
  constructor() {
    super();
    this.state = {
      WorkFields: [],
      newWorkSection: {
        workTitle: " ",
        companyName: " ",
        startDate: " ",
        endDAte: " ",
        id: uniqid(),
      },
      displayNames: {
        title: "work title",
        schoolName: "company name",
        startDate: "start date",
        endDate: "end date",
      },
      additionStatus: false,
    };
    this.toggleAddition = this.toggleAddition.bind(this);
  }

  toggleAddition() {
    this.setState({
      additionStatus: true,
    });
  }

  render() {
    return (
      <div>
        <div>Work information</div>
        <DisplayUnitComponent
          displayNames={this.state.displayNames}
          additionStatus={this.state.additionStatus}
        />
        {!this.state.additionStatus && (
          <button onClick={this.toggleAddition}>Add Experience</button>
        )}
      </div>
    );
  }
}

export default WorkInfo;
