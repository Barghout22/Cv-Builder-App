import React, { useState } from "react";
import uniqid from "uniqid";
import DisplayUnitComponent from "./DisplayUnitComponent";

const WorkInfo = () => {
  const [WorkFields, setWorkFields] = useState([]);

  const [newWorkSectionWorkTitle, setNewWorkSectionWorkTitle] = useState("");
  const [newWorkSectionCompanyName, setNewWorkSectionCompanyName] =
    useState("");
  const [newWorkSectionStartDate, setNewWorkSectionStartDate] = useState("");
  const [newWorkSectionEndDate, setNewWorkSectionEndDate] = useState("");
  const [newWorkSectionId, setNewWorkSectionId] = useState(uniqid());

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
    setNewWorkSectionWorkTitle(event.target.value);
  };
  const handleSchoolNameChange = (event) => {
    setNewWorkSectionCompanyName(event.target.value);
  };

  const handleStartChange = (event) => {
    setNewWorkSectionStartDate(event.target.value);
  };

  const handleEndChange = (event) => {
    setNewWorkSectionEndDate(event.target.value);
  };

  const addSection = () => {
    setWorkFields(
      WorkFields.concat({
        workTitle: newWorkSectionWorkTitle,
        companyName: newWorkSectionCompanyName,
        startDate: newWorkSectionStartDate,
        endDAte: newWorkSectionEndDate,
        id: newWorkSectionId,
      })
    );
    setNewWorkSectionWorkTitle("");
    setNewWorkSectionCompanyName("");
    setNewWorkSectionStartDate("");
    setNewWorkSectionEndDate("");
    setNewWorkSectionId(uniqid());
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

export default WorkInfo;
