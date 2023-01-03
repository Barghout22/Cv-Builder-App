import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div class="generalInfoTitle">general info</div>
        <form action="">
          <label forName="name">
            name
            <input type="text" forName="name" />
          </label>
          <label forName="email">
            email
            <input type="mail" forName="email" />
          </label>
          <label forName="phoneNumber">
            phone number
            <input type="tel" forName="phoneNumber" />
          </label>
          <label forName="address">
            address
            <input type="text" forName="address" />
          </label>
          <label forName="about">
            about you
            <input type="textarea" forName="about" />
          </label>
          <button type="submit">add my info</button>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
