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
      editStatus: "not active",
    };
  }

  render() {
    return (
      <div>
        <div>Work information</div>
        <DisplayUnitComponent displayNames={this.state.displayNames} />
        <button>Add Experience</button>
      </div>
    );
  }
}

export default WorkInfo;
