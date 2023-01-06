import React, { Component } from "react";

class DisplayUnitComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        {this.props.educationFields && (
          <div>
            {this.props.educationFields.map((item) => (
              <div key={item.id}>
                <p>
                  {" "}
                  {this.props.displayNames.title}:
                  {item.studyTitle || item.workTitle}
                </p>
                <p>
                  {" "}
                  {this.props.displayNames.schoolName}:
                  {item.schoolName || item.companyName}
                </p>
                <p> start Date:{item.startDate}</p>
                <p>End Date:{item.endDate} </p>
                <button
                  onClick={() => {
                    this.props.deleteSection(item.id);
                  }}
                >
                  delete section
                </button>
              </div>
            ))}
          </div>
        )}

        {this.props.additionStatus && (
          <div>
            <div>
              <label>
                {this.props.displayNames.title}
                <input
                  type="text"
                  onChange={this.props.handleStudyNameChange}
                />
              </label>
            </div>
            <div>
              <label>
                {this.props.displayNames.schoolName}
                <input
                  type="text"
                  onChange={this.props.handleSchoolNameChange}
                />
              </label>
            </div>
            <div>
              <label>
                {this.props.displayNames.startDate}
                <input type="text" onChange={this.props.handleStartChange} />
              </label>
            </div>
            <div>
              <label>
                {this.props.displayNames.endDate}
                <input type="text" onChange={this.props.handleEndChange} />
              </label>
            </div>
            <button onClick={this.props.addSection}>add section</button>
          </div>
        )}
      </div>
    );
  }
}

export default DisplayUnitComponent;
