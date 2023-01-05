import React, { Component } from "react";
import uniqid from "uniqid";
import DisplayUnitComponent from "./DisplayUnitComponent";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      educationFields: [],
      newEducationSection: {
        studyTitle: " ",
        schoolName: " ",
        startDate: " ",
        endDAte: " ",
        id: uniqid(),
      },
      displayNames: {
        title: "Study title",
        schoolName: "school name",
        startDate: "start date",
        endDate: "end date",
      },
      editStatus: "not active",
    };
  }

  render() {
    return (
      <div>
        <div>Education Info</div>
        <DisplayUnitComponent displayNames={this.state.displayNames} />
        <button>Add Experience</button>
      </div>
    );
  }
}

export default Education;
