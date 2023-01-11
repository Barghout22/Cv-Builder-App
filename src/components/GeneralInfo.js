import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor() {
    super();
    this.state = {
      recordedInfo: {
        name: " ",
        email: " ",
        phoneNo: " ",
        address: " ",
        about: " ",
      },
      editedInfo: {
        name: " ",
        email: " ",
        phoneNo: " ",
        address: " ",
        about: " ",
      },
      editStatus: true,
    };
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhoneNo = this.handlePhoneNo.bind(this);
    this.handleAdress = this.handleAdress.bind(this);
    this.handleAbout = this.handleAbout.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.activateEditStatus = this.activateEditStatus.bind(this);
  }

  activateEditStatus() {
    this.setState({
      editStatus: true,
    });
  }
  handleName(event) {
    this.setState({
      editedInfo: {
        email: this.state.editedInfo.email,
        phoneNo: this.state.editedInfo.phoneNo,
        address: this.state.editedInfo.address,
        about: this.state.editedInfo.about,
        name: event.target.value,
      },
    });
  }
  handleEmail(event) {
    this.setState({
      editedInfo: {
        name: this.state.editedInfo.name,
        phoneNo: this.state.editedInfo.phoneNo,
        address: this.state.editedInfo.address,
        about: this.state.editedInfo.about,
        email: event.target.value,
      },
    });
  }
  handlePhoneNo(event) {
    this.setState({
      editedInfo: {
        name: this.state.editedInfo.name,
        email: this.state.editedInfo.email,
        address: this.state.editedInfo.address,
        about: this.state.editedInfo.about,
        phoneNo: event.target.value,
      },
    });
  }
  handleAdress(event) {
    this.setState({
      editedInfo: {
        name: this.state.editedInfo.name,
        email: this.state.editedInfo.email,
        phoneNo: this.state.editedInfo.phoneNo,
        about: this.state.editedInfo.about,
        address: event.target.value,
      },
    });
  }
  handleAbout(event) {
    this.setState({
      editedInfo: {
        name: this.state.editedInfo.name,
        email: this.state.editedInfo.email,
        phoneNo: this.state.editedInfo.phoneNo,
        address: this.state.editedInfo.address,
        about: event.target.value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      recordedInfo: {
        name:
          this.state.editedInfo.name === " "
            ? this.state.recordedInfo.name
            : this.state.editedInfo.name,
        email:
          this.state.editedInfo.email === " "
            ? this.state.recordedInfo.email
            : this.state.editedInfo.email,
        phoneNo:
          this.state.editedInfo.phoneNo === " "
            ? this.state.recordedInfo.phoneNo
            : this.state.editedInfo.phoneNo,
        address:
          this.state.editedInfo.address === " "
            ? this.state.recordedInfo.address
            : this.state.editedInfo.address,
        about:
          this.state.editedInfo.about === " "
            ? this.state.recordedInfo.about
            : this.state.editedInfo.about,
      },
      editedInfo: {
        name: " ",
        email: " ",
        phoneNo: " ",
        address: " ",
        about: " ",
      },
      editStatus: false,
    });
  }
  render() {
    return (
      <div>
        <div className="sectionHead">General information</div>
        {this.state.editStatus && (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Name :
                <input
                  type="text"
                  defaultValue={this.state.recordedInfo.name}
                  onChange={this.handleName}
                />
              </label>
            </div>
            <div>
              <label>
                Email:
                <input
                  type="email"
                  defaultValue={this.state.recordedInfo.email}
                  onChange={this.handleEmail}
                />
              </label>
            </div>
            <div>
              <label>
                Number:
                <input
                  type="tel"
                  defaultValue={this.state.recordedInfo.phoneNo}
                  onChange={this.handlePhoneNo}
                />
              </label>
            </div>
            <div>
              <label>
                Address:
                <input
                  type="text"
                  defaultValue={this.state.recordedInfo.address}
                  onChange={this.handleAdress}
                />
              </label>
            </div>
            <div>
              <label>
                About :
                <textarea
                  rows="10"
                  columns="50"
                  defaultValue={this.state.recordedInfo.about}
                  onChange={this.handleAbout}
                />
              </label>
            </div>
            <button type="submit">add my info</button>
          </form>
        )}
        {!this.state.editStatus && (
          <div>
            <div>name:{this.state.recordedInfo.name} </div>
            <div> email:{this.state.recordedInfo.email}</div>
            <div> phone number:{this.state.recordedInfo.phoneNo}</div>
            <div> address:{this.state.recordedInfo.address}</div>
            <div> about:{this.state.recordedInfo.about}</div>
            <button onClick={this.activateEditStatus}>edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default GeneralInfo;
