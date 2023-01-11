import React, { useState } from "react";
import uniqid from "uniqid";

const Skills = () => {
  const [skillList, setSkillList] = useState([]);
  const [editedSkill, setEditedSkill] = useState("");
  const [editedSkillId, setEditedSkillId] = useState(uniqid());
  const [addStatus, setAddStatus] = useState(false);

  const addSkill = () => {
    setAddStatus(true);
  };

  const handleChange = (event) => {
    setEditedSkill(event.target.value);
  };

  const handleAddition = () => {
    setSkillList(skillList.concat({ skill: editedSkill, id: editedSkillId }));
    setEditedSkill("");
    setEditedSkillId(uniqid());
    setAddStatus(false);
  };
  const deleteSkill = (id) => {
    setSkillList(
      skillList.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <div>
      <div className="sectionHead">Skills</div>

      <ul>
        {skillList.map((item) => {
          return (
            <li key={item.id}>
              {" "}
              {item.skill}
              <button onClick={() => deleteSkill(item.id)}>x</button>
            </li>
          );
        })}
      </ul>
      {addStatus && (
        <span>
          <label>
            add skill
            <input type="text" onChange={handleChange} />
          </label>
          <button onClick={handleAddition}>add</button>
        </span>
      )}
      {!addStatus && <button onClick={addSkill}>add skill</button>}
    </div>
  );
};

export default Skills;
