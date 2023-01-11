import React, { useState } from "react";
import uniqid from "uniqid";
import DisplayUnitComponent from "./DisplayUnitComponent";

const Education = () => {
  const [educationFields, setEducationFields] = useState([]);

  const [newSchooolSectionStudyTitle, setNewSchoolSectionStudyTitle] =
    useState("");
  const [newSchoolSectionSchoolName, setnewSchoolSectionSchoolName] =
    useState("");
  const [newSchoolSectionStartDate, setNewSchoolSectionStartDate] =
    useState("");
  const [newSchoolSectionEndDate, setNewSchoolSectionEndDate] = useState("");
  const [newSchoolSectionId, setNewSchoolSectionId] = useState(uniqid());

  const [additionStatus, setAdditionStatus] = useState(false);
  const displayNames = {
    title: "Study title",
    schoolName: "school name",
    startDate: "start date",
    endDate: "end date",
  };

  const toggleAddition = () => {
    setAdditionStatus(true);
  };

  const handleStudyNameChange = (event) => {
    setNewSchoolSectionStudyTitle(event.target.value);
  };
  const handleSchoolNameChange = (event) => {
    setnewSchoolSectionSchoolName(event.target.value);
  };

  const handleStartChange = (event) => {
    setNewSchoolSectionStartDate(event.target.value);
  };

  const handleEndChange = (event) => {
    setNewSchoolSectionEndDate(event.target.value);
  };

  const addSection = () => {
    setEducationFields(
      educationFields.concat({
        studyTitle: newSchooolSectionStudyTitle,
        schoolName: newSchoolSectionSchoolName,
        startDate: newSchoolSectionStartDate,
        endDAte: newSchoolSectionEndDate,
        id: newSchoolSectionId,
      })
    );
    setNewSchoolSectionStudyTitle("");
    setnewSchoolSectionSchoolName("");
    setNewSchoolSectionStartDate("");
    setNewSchoolSectionEndDate("");
    setNewSchoolSectionId(uniqid());
    setAdditionStatus(false);
  };

  const deleteSection = (id) => {
    setEducationFields(
      educationFields.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <div>
      <div className="sectionHead">Education information</div>
      <DisplayUnitComponent
        educationFields={educationFields}
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

export default Education;
