import React, { Component, useState } from "react";
import uniqid from "uniqid";
import DisplayUnitComponent from "./DisplayUnitComponent";

const WorkInfo = () => {
  const [WorkFields, setWorkFields] = useState([]);
  const [newWorkSection, setNewWorkSection] = useState({
    workTitle: " ",
    companyName: " ",
    startDate: " ",
    endDate: " ",
    id: uniqid(),
  });
  const [additionStatus, setAdditionStatus] = useState(false);
  const displayNames = {
    title: "work title",
    schoolName: "company name",
    startDate: "start date",
    endDate: "end date",
  };

  const toggleAddition = () => {
    setAdditionStatus(true);
  };

  const handleStudyNameChange = (event) => {
    setNewWorkSection((newWorkSection.workTitle = event.target.value));
  };
  const handleSchoolNameChange = (event) => {
    setNewWorkSection((newWorkSection.companyName = event.target.value));
  };

  const handleStartChange = (event) => {
    setNewWorkSection((newWorkSection.startDate = event.target.value));
  };

  const handleEndChange = (event) => {
    setNewWorkSection((newWorkSection.endDate = event.target.value));
  };

  const addSection = () => {
    setWorkFields(WorkFields.concat(newWorkSection));
    setNewWorkSection({
      workTitle: " ",
      companyName: " ",
      startDate: " ",
      endDAte: " ",
      id: uniqid(),
    });
    setAdditionStatus(false);
  };

  const deleteSection = (id) => {
    setWorkFields(
      WorkFields.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <div>
      <div className="sectionHead">Work information</div>
      <DisplayUnitComponent
        educationFields={WorkFields}
        displayNames={displayNames}
        additionStatus={additionStatus}
        toggleAddition={toggleAddition}
        handleStudyNameChange={handleStudyNameChange}
        handleSchoolNameChange={handleSchoolNameChange}
        handleStartChange={handleStartChange}
        handleEndChange={handleEndChange}
        addSection={addSection}
        deleteSection={deleteSection}
      />
      {!additionStatus && (
        <button onClick={toggleAddition}>Add Experience</button>
      )}
    </div>
  );
};

// class WorkInfo extends Component {
//   constructor() {
//     super();
//     this.state = {
//       WorkFields: [],
//       newWorkSection: {
//         workTitle: " ",
//         companyName: " ",
//         startDate: " ",
//         endDAte: " ",
//         id: uniqid(),
//       },
//       displayNames: {
//         title: "work title",
//         schoolName: "company name",
//         startDate: "start date",
//         endDate: "end date",
//       },
//       additionStatus: false,
//     };
//     this.toggleAddition = this.toggleAddition.bind(this);
//     this.handleStudyNameChange = this.handleStudyNameChange.bind(this);
//     this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this);
//     this.handleStartChange = this.handleStartChange.bind(this);
//     this.handleEndChange = this.handleEndChange.bind(this);
//     this.addSection = this.addSection.bind(this);
//     this.deleteSection = this.deleteSection.bind(this);
//   }

//   toggleAddition() {
//     this.setState({
//       additionStatus: true,
//     });
//   }

//   handleStudyNameChange(event) {
//     this.setState({
//       newWorkSection: {
//         workTitle: event.target.value,
//         companyName: this.state.newWorkSection.companyName,
//         startDate: this.state.newWorkSection.startDate,
//         endDate: this.state.newWorkSection.startDate,
//         id: this.state.newWorkSection.id,
//       },
//     });
//   }
//   handleSchoolNameChange(event) {
//     this.setState({
//       newWorkSection: {
//         workTitle: this.state.newWorkSection.workTitle,
//         companyName: event.target.value,
//         startDate: this.state.newWorkSection.startDate,
//         endDate: this.state.newWorkSection.endDAte,
//         id: this.state.newWorkSection.id,
//       },
//     });
//   }
//   handleStartChange(event) {
//     this.setState({
//       newWorkSection: {
//         workTitle: this.state.newWorkSection.workTitle,
//         companyName: this.state.newWorkSection.companyName,
//         startDate: event.target.value,
//         endDate: this.state.newWorkSection.endDAte,
//         id: this.state.newWorkSection.id,
//       },
//     });
//   }
//   handleEndChange(event) {
//     this.setState({
//       newWorkSection: {
//         workTitle: this.state.newWorkSection.workTitle,
//         companyName: this.state.newWorkSection.companyName,
//         startDate: this.state.newWorkSection.startDate,
//         endDate: event.target.value,
//         id: this.state.newWorkSection.id,
//       },
//     });
//   }

//   addSection() {
//     this.setState({
//       WorkFields: this.state.WorkFields.concat(this.state.newWorkSection),
//       newWorkSection: {
//         workTitle: " ",
//         companyName: " ",
//         startDate: " ",
//         endDAte: " ",
//         id: uniqid(),
//       },
//       additionStatus: false,
//     });
//   }
//   deleteSection(id) {
//     this.setState({
//       WorkFields: this.state.WorkFields.filter((item) => {
//         return item.id !== id;
//       }),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <div className="sectionHead">Work information</div>
//         <DisplayUnitComponent
//           educationFields={this.state.WorkFields}
//           displayNames={this.state.displayNames}
//           additionStatus={this.state.additionStatus}
//           toggleAddition={this.toggleAddition}
//           handleStudyNameChange={this.handleStudyNameChange}
//           handleSchoolNameChange={this.handleSchoolNameChange}
//           handleStartChange={this.handleStartChange}
//           handleEndChange={this.handleEndChange}
//           addSection={this.addSection}
//           deleteSection={this.deleteSection}
//         />
//         {!this.state.additionStatus && (
//           <button onClick={this.toggleAddition}>Add Experience</button>
//         )}
//       </div>
//     );
//   }
// }

export default WorkInfo;
