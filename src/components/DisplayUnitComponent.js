import React from "react";

function DisplayUnitComponent(props) {
  // constructor(props) {
  //   super(props);
  // }

  return (
    <div>
      {props.educationFields && (
        <div>
          {props.educationFields.map((item) => (
            <div key={item.id}>
              <p>
                {" "}
                {props.displayNames.title}:{item.studyTitle || item.workTitle}
              </p>
              <p>
                {" "}
                {props.displayNames.schoolName}:
                {item.schoolName || item.companyName}
              </p>
              <p> start Date:{item.startDate}</p>
              <p>End Date:{item.endDate} </p>
              <button
                onClick={() => {
                  props.deleteSection(item.id);
                }}
              >
                delete section
              </button>
            </div>
          ))}
        </div>
      )}

      {props.additionStatus && (
        <div>
          <fieldset>
            <legend>Add your experience</legend>
            <div>
              <label>
                {props.displayNames.title}
                <input
                  type="text"
                  onChange={this.props.handleStudyNameChange}
                />
              </label>
            </div>
            <div>
              <label>
                {props.displayNames.schoolName}
                <input type="text" onChange={props.handleSchoolNameChange} />
              </label>
            </div>
            <div>
              <label>
                {props.displayNames.startDate}
                <input type="text" onChange={props.handleStartChange} />
              </label>
            </div>
            <div>
              <label>
                {props.displayNames.endDate}
                <input type="text" onChange={this.props.handleEndChange} />
              </label>
            </div>
            <button onClick={props.addSection}>add section</button>
          </fieldset>
        </div>
      )}
    </div>
  );
}

export default DisplayUnitComponent;
