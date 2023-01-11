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
        endDate: " ",
        id: uniqid(),
      },
      displayNames: {
        title: "Study title",
        schoolName: "school name",
        startDate: "start date",
        endDate: "end date",
      },
      additionStatus: false,
    };
    this.toggleAddition = this.toggleAddition.bind(this);
    this.handleStudyNameChange = this.handleStudyNameChange.bind(this);
    this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.addSection = this.addSection.bind(this);
    this.deleteSection = this.deleteSection.bind(this);
  }
  toggleAddition() {
    this.setState({
      additionStatus: true,
    });
  }

  handleStudyNameChange(event) {
    this.setState({
      newEducationSection: {
        studyTitle: event.target.value,
        schoolName: this.state.newEducationSection.schoolName,
        startDate: this.state.newEducationSection.startDate,
        endDate: this.state.newEducationSection.startDate,
        id: this.state.newEducationSection.id,
      },
    });
  }
  handleSchoolNameChange(event) {
    this.setState({
      newEducationSection: {
        studyTitle: this.state.newEducationSection.studyTitle,
        schoolName: event.target.value,
        startDate: this.state.newEducationSection.startDate,
        endDate: this.state.newEducationSection.endDAte,
        id: this.state.newEducationSection.id,
      },
    });
  }
  handleStartChange(event) {
    this.setState({
      newEducationSection: {
        studyTitle: this.state.newEducationSection.studyTitle,
        schoolName: this.state.newEducationSection.schoolName,
        startDate: event.target.value,
        endDate: this.state.newEducationSection.endDAte,
        id: this.state.newEducationSection.id,
      },
    });
  }
  handleEndChange(event) {
    this.setState({
      newEducationSection: {
        studyTitle: this.state.newEducationSection.studyTitle,
        schoolName: this.state.newEducationSection.schoolName,
        startDate: this.state.newEducationSection.startDate,
        endDate: event.target.value,
        id: this.state.newEducationSection.id,
      },
    });
  }

  addSection() {
    this.setState({
      educationFields: this.state.educationFields.concat(
        this.state.newEducationSection
      ),
      newEducationSection: {
        studyTitle: " ",
        schoolName: " ",
        startDate: " ",
        endDate: " ",
        id: uniqid(),
      },
      additionStatus: false,
    });
  }
  deleteSection(id) {
    this.setState({
      educationFields: this.state.educationFields.filter((item) => {
        return item.id !== id;
      }),
    });
  }

  render() {
    return (
      <div>
        <div className="sectionHead">Education Info</div>
        <DisplayUnitComponent
          educationFields={this.state.educationFields}
          displayNames={this.state.displayNames}
          additionStatus={this.state.additionStatus}
          toggleAddition={this.toggleAddition}
          handleStudyNameChange={this.handleStudyNameChange}
          handleSchoolNameChange={this.handleSchoolNameChange}
          handleStartChange={this.handleStartChange}
          handleEndChange={this.handleEndChange}
          addSection={this.addSection}
          deleteSection={this.deleteSection}
        />
        {!this.state.additionStatus && (
          <button onClick={this.toggleAddition}>Add Experience</button>
        )}
      </div>
    );
  }
}

export default Education;
