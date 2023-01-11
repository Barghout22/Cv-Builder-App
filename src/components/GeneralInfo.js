import React, { useState } from "react";

const GeneralInfo = () => {
  const [recordedInfoName, setRecordedInfoName] = useState("");
  const [recordedInfoEmail, setRecordedInfoEmail] = useState("");
  const [recordedInfoPhoneNo, setRecordedInfoPhoneNo] = useState("");
  const [recordedInfoAddress, setRecordedInfoAddress] = useState("");
  const [recordedInfoAbout, setRecordedInfoAbout] = useState("");

  const [editedInfoName, setEditedInfoName] = useState(" ");
  const [editedInfoEmail, setEditedInfoEmail] = useState(" ");
  const [editedInfoPhoneNo, setEditedInfoPhoneNo] = useState(" ");
  const [editedInfoAddress, setEditedInfoAddress] = useState(" ");
  const [editedInfoAbout, setEditedInfoAbout] = useState(" ");

  const [editStatus, setEditStatus] = useState(true);
  const activateEditStatus = () => {
    setEditStatus(true);
  };
  const handleName = (event) => {
    setEditedInfoName(event.target.value);
  };
  const handleEmail = (event) => {
    setEditedInfoEmail(event.target.value);
  };

  const handlePhoneNo = (event) => {
    setEditedInfoPhoneNo(event.target.value);
  };
  const handleAddress = (event) => {
    setEditedInfoAddress(event.target.value);
  };
  const handleAbout = (event) => {
    setEditedInfoAbout(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setRecordedInfoName(
      editedInfoName === " " ? recordedInfoName : editedInfoName
    );
    setRecordedInfoEmail(
      editedInfoEmail === " " ? recordedInfoEmail : editedInfoEmail
    );
    setRecordedInfoPhoneNo(
      editedInfoPhoneNo === " " ? recordedInfoPhoneNo : editedInfoPhoneNo
    );
    setRecordedInfoAddress(
      editedInfoAddress === " " ? recordedInfoAddress : editedInfoAddress
    );
    setRecordedInfoAbout(
      editedInfoAbout === " " ? recordedInfoAbout : editedInfoAbout
    );
    setEditedInfoName(" ");
    setEditedInfoEmail(" ");
    setEditedInfoPhoneNo(" ");
    setEditedInfoAddress(" ");
    setEditedInfoAbout(" ");

    setEditStatus(false);
  };
  return (
    <div>
      <div className="sectionHead">General information</div>
      {editStatus && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              name
              <input
                type="text"
                defaultValue={recordedInfoName}
                onChange={handleName}
              />
            </label>
          </div>
          <div>
            <label>
              email
              <input
                type="email"
                defaultValue={recordedInfoEmail}
                onChange={handleEmail}
              />
            </label>
          </div>
          <div>
            <label>
              phone no.
              <input
                type="tel"
                defaultValue={recordedInfoPhoneNo}
                onChange={handlePhoneNo}
              />
            </label>
          </div>
          <div>
            <label>
              address
              <input
                type="text"
                defaultValue={recordedInfoAddress}
                onChange={handleAddress}
              />
            </label>
          </div>
          <div>
            <label>
              about you
              <textarea
                rows="5"
                columns="33"
                defaultValue={recordedInfoAbout}
                onChange={handleAbout}
              />
            </label>
          </div>
          <button type="submit">add my info</button>
        </form>
      )}
      {!editStatus && (
        <div>
          <div>name:{recordedInfoName} </div>
          <div> email:{recordedInfoEmail}</div>
          <div> phone number:{recordedInfoPhoneNo}</div>
          <div> address:{recordedInfoAddress}</div>
          <div> about:{recordedInfoAbout}</div>
          <button onClick={activateEditStatus}>edit</button>
        </div>
      )}
    </div>
  );
};
export default GeneralInfo;
