import React, { Component } from "react";
import uniqid from "uniqid";

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skillList: [],
      editedSkill: { skill: "", id: uniqid() },
      addStatus: false,
    };
    this.addSkill = this.addSkill.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
  }

  addSkill() {
    this.setState({
      addStatus: true,
    });
  }

  handleChange(event) {
    this.setState({
      editedSkill: { skill: event.target.value, id: this.state.editedSkill.id },
    });
  }

  handleAddition() {
    this.setState({
      skillList: this.state.skillList.concat(this.state.editedSkill),
      editedSkill: { skill: "", id: uniqid() },
      addStatus: false,
    });
  }
  deleteSkill(id) {
    this.setState({
      skillList: this.state.skillList.filter((item) => {
        return item.id !== id;
      }),
    });
  }

  render() {
    return (
      <div>
        <div className="sectionHead">Skills</div>

        <ul>
          {this.state.skillList.map((item) => {
            return (
              <li key={item.id}>
                {" "}
                {item.skill}
                <button onClick={() => this.deleteSkill(item.id)}>x</button>
              </li>
            );
          })}
        </ul>
        {this.state.addStatus && (
          <span>
            <label>
              add skill
              <input type="text" onChange={this.handleChange} />
            </label>
            <button onClick={this.handleAddition}>add</button>
          </span>
        )}
        {!this.state.addStatus && (
          <button onClick={this.addSkill}>add skill</button>
        )}
      </div>
    );
  }
}

export default Skills;
