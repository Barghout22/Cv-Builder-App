import React, { useState } from "react";

const GeneralInfo = () => {
  const [recordedInfo, setRecordedInfo] = useState({
    name: " ",
    email: " ",
    phoneNo: " ",
    address: " ",
    about: " ",
  });
  const [editedInfo, setEditedInfo] = useState({
    name: " ",
    email: " ",
    phoneNo: " ",
    address: " ",
    about: " ",
  });
  const [editStatus, setEditStatus] = useState(true);
  const activateEditStatus = () => {
    setEditStatus(true);
  };
  const handleEmail = (event) => {
    setEditedInfo((editedInfo.email = event.target.value));
  };
  const handleName = (event) => {
    setEditedInfo((editedInfo.name = event.target.value));
  };

  const handlePhoneNo = (event) => {
    setEditedInfo((editedInfo.phoneNo = event.target.value));
  };
  const handleAddress = (event) => {
    setEditedInfo((editedInfo.address = event.target.value));
  };
  const handleAbout = (event) => {
    setEditedInfo((editedInfo.address = event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setRecordedInfo(
      (recordedInfo.name =
        editedInfo.name === " " ? recordedInfo.name : editedInfo.name)
    );
    setRecordedInfo(
      (recordedInfo.email =
        editedInfo.email === " " ? recordedInfo.email : editedInfo.email)
    );
    setRecordedInfo(
      (recordedInfo.phoneNo =
        editedInfo.phoneNo === " " ? recordedInfo.phoneNo : editedInfo.phoneNo)
    );
    setRecordedInfo(
      (recordedInfo.address =
        editedInfo.address === " " ? recordedInfo.address : editedInfo.address)
    );
    setRecordedInfo(
      (recordedInfo.about =
        editedInfo.about === " " ? recordedInfo.about : editedInfo.about)
    );
    setEditedInfo({
      name: " ",
      email: " ",
      phoneNo: " ",
      address: " ",
      about: " ",
    });
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
                defaultValue={recordedInfo.name}
                onChange={handleName}
              />
            </label>
          </div>
          <div>
            <label>
              email
              <input
                type="email"
                defaultValue={recordedInfo.email}
                onChange={handleEmail}
              />
            </label>
          </div>
          <div>
            <label>
              phone no.
              <input
                type="tel"
                defaultValue={recordedInfo.phoneNo}
                onChange={handlePhoneNo}
              />
            </label>
          </div>
          <div>
            <label>
              address
              <input
                type="text"
                defaultValue={recordedInfo.address}
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
                defaultValue={recordedInfo.about}
                onChange={handleAbout}
              />
            </label>
          </div>
          <button type="submit">add my info</button>
        </form>
      )}
      {!editStatus && (
        <div>
          <div>name:{recordedInfo.name} </div>
          <div> email:{recordedInfo.email}</div>
          <div> phone number:{recordedInfo.phoneNo}</div>
          <div> address:{recordedInfo.address}</div>
          <div> about:{recordedInfo.about}</div>
          <button onClick={activateEditStatus}>edit</button>
        </div>
      )}
    </div>
  );
};
export default GeneralInfo;
